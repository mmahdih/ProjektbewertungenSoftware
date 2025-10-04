package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.LearningFieldRepository;
import de.assessify.app.assessifyapi.api.UserRepository.UserRepository;
import de.assessify.app.assessifyapi.api.model.LearningField;
import de.assessify.app.assessifyapi.api.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/user")
public class ConnectLearningFieldWithUser {
    @Autowired
    private LearningFieldRepository learningFieldRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/{userId}/connect/learningfield/{learningfieldId}")
    public ResponseEntity<User> addGradeToLearningField(
            @PathVariable UUID userId,
            @PathVariable UUID learningfieldId){

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        LearningField learningField = learningFieldRepository.findById(learningfieldId)
                .orElseThrow(() -> new RuntimeException("learn field not found"));

        if (!user.getLearningFields().contains(learningField)) {
            user.getLearningFields().add(learningField);
        }

        User updatedUser = userRepository.save(user);

        return ResponseEntity.ok(updatedUser);
    }
}
