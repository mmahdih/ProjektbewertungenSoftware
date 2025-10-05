package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.LearningFieldRepository;
import de.assessify.app.assessifyapi.api.UserRepository.UserRepository;
import de.assessify.app.assessifyapi.api.model.Grade;
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
public class GetGradesForLearningFieldController {
    private final LearningFieldRepository learningFieldRepository;
    private final UserRepository userRepository;

    public GetGradesForLearningFieldController(LearningFieldRepository learningFieldRepository, UserRepository userRepository) {
        this.learningFieldRepository = learningFieldRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/{userId}/learningfield/{learningfieldId}/grades")
    public ResponseEntity<List<Grade>> getGradesForLearningField(
        @PathVariable UUID userId,
        @PathVariable UUID learningfieldId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        LearningField learningField = learningFieldRepository.findById(learningfieldId)
                .orElseThrow(() -> new RuntimeException("learn field not found"));

        if (!user.getLearningFields().contains(learningField)) {
            throw new RuntimeException("This learning field does not belong to this user");
        }

        return ResponseEntity.ok(learningField.getGrades());
    }
}
