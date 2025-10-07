package de.assessify.app.assessifyapi.api.controller.review;

import de.assessify.app.assessifyapi.api.dtos.request.AddReviewAnswerDto;
import de.assessify.app.assessifyapi.api.dtos.response.ReviewAnswerDto;
import de.assessify.app.assessifyapi.api.dtos.response.ReviewDto;
import de.assessify.app.assessifyapi.api.entity.*;
import de.assessify.app.assessifyapi.api.userrepository.ProjectRepository;
import de.assessify.app.assessifyapi.api.userrepository.QuestionRepository;
import de.assessify.app.assessifyapi.api.userrepository.ReviewRepository;
import de.assessify.app.assessifyapi.api.userrepository.UserRepository;
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

    public ReviewController(ReviewRepository reviewRepository, UserRepository userRepository, ProjectRepository projectRepository, QuestionRepository questionRepository) {
        this.reviewRepository = reviewRepository;
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
        this.questionRepository = questionRepository;
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

    @PutMapping("/user/{userId}/project/{projectId}/update/review/{reviewId}")
    public ResponseEntity<ReviewDto> updateReview(
            @PathVariable UUID userId,
            @PathVariable UUID projectId,
            @PathVariable UUID reviewId,
            @RequestBody UpdateReviewDto dto) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new RuntimeException("Review not found"));

        if (!review.getUser().getId().equals(user.getId()) ||
                !review.getProject().getId().equals(project.getId())) {
            throw new RuntimeException("Review does not belong to this user or project");
        }

        review.setGrade(dto.grade());
        Review updated = reviewRepository.save(review);

        ReviewDto response = new ReviewDto(
                updated.getId(),
                updated.getGrade(),
                updated.getDate(),
                user.getId(),
                project.getId()
        );

        return ResponseEntity.ok(response);
    }
}