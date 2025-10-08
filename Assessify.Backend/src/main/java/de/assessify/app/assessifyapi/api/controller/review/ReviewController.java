package de.assessify.app.assessifyapi.api.controller.review;

import de.assessify.app.assessifyapi.api.dtos.request.AddReviewAnswerDto;
import de.assessify.app.assessifyapi.api.dtos.request.UpdateRatingDto;
import de.assessify.app.assessifyapi.api.dtos.response.ReviewAnswerDto;
import de.assessify.app.assessifyapi.api.dtos.response.ReviewDto;
import de.assessify.app.assessifyapi.api.entity.*;
import de.assessify.app.assessifyapi.api.userrepository.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class ReviewController {
    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;
    private final QuestionRepository questionRepository;
    private final ReviewAnswerRepository reviewAnswerRepository;

    public ReviewController(ReviewRepository reviewRepository, UserRepository userRepository, ProjectRepository projectRepository, QuestionRepository questionRepository, ReviewAnswerRepository reviewAnswerRepository) {
        this.reviewRepository = reviewRepository;
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
        this.questionRepository = questionRepository;
        this.reviewAnswerRepository = reviewAnswerRepository;
    }

    @GetMapping("/user/{userId}/show/all/reviews")
    public ResponseEntity<List<ReviewDto>> getAllReviews(
            @PathVariable UUID userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        List<ReviewDto> reviews = user.getReviews().stream()
                .map(field -> new ReviewDto(
                        field.getId(),
                        field.getProject().getId(),
                        field.getUser().getId(),
                        field.getDate(),
                        field.getAnswers().stream()
                                .map(a -> new ReviewAnswerDto(
                                        a.getId(),
                                        a.getQuestion().getId(),
                                        a.getQuestion().getQuestionText(),
                                        a.getReviewedUser().getId(),
                                        a.getReviewedUser().getFirstName() + " " + a.getReviewedUser().getLastName(),
                                        a.getRating()
                                )).toList()
                )).toList();

        return ResponseEntity.ok(reviews);
    }

    @PostMapping("/user/{userId}/project/{projectId}/add/review")
    public ResponseEntity<ReviewDto> createReview(
            @PathVariable UUID userId,
            @PathVariable UUID projectId,
            @RequestBody List<AddReviewAnswerDto> answerDto) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        Review review = new Review();
        review.setUser(user);
        review.setProject(project);

        List<ReviewAnswer> answers = answerDto.stream().map(dto -> {
            Question q = questionRepository.findById(dto.questionId())
                    .orElseThrow(() -> new RuntimeException("Question not found"));
            User reviewed = userRepository.findById(dto.reviewedUserId())
                    .orElseThrow(() -> new RuntimeException("Reviewed user not found"));

            ReviewAnswer a = new ReviewAnswer();
            a.setQuestion(q);
            a.setReviewedUser(reviewed);
            a.setRating(dto.rating());
            a.setReview(review);
            return a;
        }).toList();

        review.setAnswers(answers);
        Review saved = reviewRepository.save(review);

        ReviewDto response = new ReviewDto(
                saved.getId(),
                saved.getProject().getId(),
                saved.getUser().getId(),
                saved.getDate(),
                saved.getAnswers().stream().map(a ->
                        new ReviewAnswerDto(
                                a.getId(),
                                a.getQuestion().getId(),
                                a.getQuestion().getQuestionText(),
                                a.getReviewedUser().getId(),
                                a.getReviewedUser().getFirstName() + " " + a.getReviewedUser().getLastName() + " " + a.getReviewedUser().getEmail(),
                                a.getRating()
                        )).toList()
        );

        return ResponseEntity.ok(response);
    }

    @PutMapping("/review/{reviewAnswerId}/update")
    public ResponseEntity<ReviewAnswerDto> updateRating(
            @PathVariable UUID reviewAnswerId,
            @RequestBody UpdateRatingDto dto) {

        ReviewAnswer reviewAnswer = reviewAnswerRepository.findById(reviewAnswerId)
                .orElseThrow(() -> new RuntimeException("ReviewAnswer not found"));

        reviewAnswer.setRating(dto.rating());

        ReviewAnswer updated = reviewAnswerRepository.save(reviewAnswer);

        ReviewAnswerDto response = new ReviewAnswerDto(
                updated.getId(),
                updated.getQuestion().getId(),
                updated.getQuestion().getQuestionText(),
                updated.getReviewedUser() != null ? updated.getReviewedUser().getId() : null,
                updated.getReviewedUser() != null ? updated.getReviewedUser().getFirstName() + " " + updated.getReviewedUser().getLastName() : null,
                updated.getRating()
        );

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/review/answer/{reviewAnswerId}/delete")
    public ResponseEntity<Void> deleteReviewAnswer(
            @PathVariable UUID reviewAnswerId) {

        ReviewAnswer reviewAnswer = reviewAnswerRepository.findById(reviewAnswerId)
                .orElseThrow(() -> new RuntimeException("Review Answer not found"));

        reviewAnswerRepository.delete(reviewAnswer);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/review/{reviewId}/delete")
    public ResponseEntity<Void> deleteReview(
            @PathVariable UUID reviewId) {

        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new RuntimeException("Review not found"));

        reviewRepository.delete(review);
        return ResponseEntity.noContent().build();
    }
}