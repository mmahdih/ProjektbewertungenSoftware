package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.GradeRepository;
import de.assessify.app.assessifyapi.api.UserRepository.LearningFieldRepository;
import de.assessify.app.assessifyapi.api.UserRepository.UserRepository;
import de.assessify.app.assessifyapi.api.model.Grade;
import de.assessify.app.assessifyapi.api.model.TrainingModule;
import de.assessify.app.assessifyapi.api.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/user/{userId}/learningfield/{learningfieldId}/new/grade")
public class AddGrade {
    private final GradeRepository gradeRepository;

    private final LearningFieldRepository learningFieldRepository;

    private final UserRepository userRepository;

    public AddGrade(GradeRepository gradeRepository, LearningFieldRepository learningFieldRepository, UserRepository userRepository) {
        this.gradeRepository = gradeRepository;
        this.learningFieldRepository = learningFieldRepository;
        this.userRepository = userRepository;
    }

    @PostMapping
    public ResponseEntity<Grade> addGradeToLearningField(
            @PathVariable("userId") UUID userId,
            @PathVariable("learningfieldId") UUID learningFieldId,
            @RequestBody Grade grade){

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        TrainingModule learningField = learningFieldRepository.findById(learningFieldId)
                .orElseThrow(() -> new RuntimeException("learn field not found"));

        if (!user.getLearningFields().contains(learningField)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        grade.setLearningField(learningField);
        Grade savedGrade = gradeRepository.save(grade);

        return ResponseEntity.ok(savedGrade);
    }
}