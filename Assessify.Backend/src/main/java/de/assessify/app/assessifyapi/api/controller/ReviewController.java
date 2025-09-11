package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.ReviewRepository;
import de.assessify.app.assessifyapi.api.UserRepository.RoleRepository;
import de.assessify.app.assessifyapi.api.model.Review;
import de.assessify.app.assessifyapi.api.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/review")
public class ReviewController {
    @Autowired
    private ReviewRepository reviewRepository;

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Review review) {
        Review response = reviewRepository.save(review);
        return ResponseEntity.ok(response);
    }
}