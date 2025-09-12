package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.GradeRepository;
import de.assessify.app.assessifyapi.api.UserRepository.LearningFieldRepository;
import de.assessify.app.assessifyapi.api.UserRepository.UserRepository;
import de.assessify.app.assessifyapi.api.model.Grade;
import de.assessify.app.assessifyapi.api.model.LearningField;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/grade")
public class GradeController {
    @Autowired
    private GradeRepository gradeRepository;

    @Autowired
    private LearningFieldRepository learningFieldRepository;

    @PostMapping("/{learningFieldId}")
    public ResponseEntity<Grade> addGradeToLearningField(
            @PathVariable UUID learningFieldId,
            @RequestBody Grade grade){
        LearningField learningField = learningFieldRepository.findById(learningFieldId)
                .orElseThrow(() -> new RuntimeException("LearningField not found"));
        grade.setLearningField(learningField);

        Grade saveGrade = gradeRepository.save(grade);
        return ResponseEntity.ok(saveGrade);
    }
}