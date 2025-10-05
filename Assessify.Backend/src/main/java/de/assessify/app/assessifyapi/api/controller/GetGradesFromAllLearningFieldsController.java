package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.UserRepository;
import de.assessify.app.assessifyapi.api.model.LearningField;
import de.assessify.app.assessifyapi.api.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/user")
public class GetGradesFromAllLearningFieldsController {
    private final UserRepository userRepository;

    public GetGradesFromAllLearningFieldsController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/{userId}/grades")
    public ResponseEntity<List<LearningField>> getGradesForLearningField(
            @PathVariable UUID userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        List<LearningField> learningFields = user.getLearningFields();

        return ResponseEntity.ok(learningFields);
    }
}
