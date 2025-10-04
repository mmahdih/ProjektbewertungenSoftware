package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.GradeRepository;
import de.assessify.app.assessifyapi.api.UserRepository.LearningFieldRepository;
import de.assessify.app.assessifyapi.api.UserRepository.UserRepository;
import de.assessify.app.assessifyapi.api.model.Grade;
import de.assessify.app.assessifyapi.api.model.LearningField;
import de.assessify.app.assessifyapi.api.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/user/{userId}/learningfield/{learningfieldId}/new/grade")
public class AddGrade {
    @Autowired
    private GradeRepository gradeRepository;

    @Autowired
    private LearningFieldRepository learningFieldRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<Grade> addGradeToLearningField(
            @PathVariable("userId") UUID userId,
            @PathVariable("learningfieldId") UUID learningFieldId,
            @RequestBody Grade grade){

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        LearningField learningField = learningFieldRepository.findById(learningFieldId)
                .orElseThrow(() -> new RuntimeException("learn field not found"));

        if (!user.getLearningFields().contains(learningField)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        grade.setLearningField(learningField);
        Grade savedGrade = gradeRepository.save(grade);

        return ResponseEntity.ok(savedGrade);
    }
}