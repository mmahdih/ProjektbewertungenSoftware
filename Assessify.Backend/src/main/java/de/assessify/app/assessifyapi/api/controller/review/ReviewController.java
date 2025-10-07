package de.assessify.app.assessifyapi.api.controller.review;

import de.assessify.app.assessifyapi.api.dtos.request.AddReviewDto;
import de.assessify.app.assessifyapi.api.dtos.request.UpdateReviewDto;
import de.assessify.app.assessifyapi.api.dtos.response.ReviewDto;
import de.assessify.app.assessifyapi.api.entity.Project;
import de.assessify.app.assessifyapi.api.entity.Review;
import de.assessify.app.assessifyapi.api.entity.User;
import de.assessify.app.assessifyapi.api.userrepository.ProjectRepository;
import de.assessify.app.assessifyapi.api.userrepository.ReviewRepository;
import de.assessify.app.assessifyapi.api.userrepository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api")
public class ReviewController {
    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;

    public ReviewController(ReviewRepository reviewRepository, UserRepository userRepository, ProjectRepository projectRepository) {
        this.reviewRepository = reviewRepository;
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
    }

    @PostMapping("/user/{userId}/project/{projectId}/add/review")
    public ResponseEntity<ReviewDto> addProject(
            @PathVariable UUID userId,
            @PathVariable UUID projectId,
            @RequestBody AddReviewDto dto) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        Review review = new Review();
        review.setUser(user);
        review.setProject(project);
        review.setGrade(dto.grade());

        Review saved = reviewRepository.save(review);

        ReviewDto response = new ReviewDto(
                saved.getId(),
                saved.getGrade(),
                saved.getDate(),
                user.getId(),
                project.getId()
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