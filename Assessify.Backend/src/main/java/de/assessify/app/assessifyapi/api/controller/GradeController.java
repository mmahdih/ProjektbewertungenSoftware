package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.GradeRepository;
import de.assessify.app.assessifyapi.api.model.Grade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/grade")
public class GradeController {
    @Autowired
    private GradeRepository gradeRepository;

    @PostMapping
    public ResponseEntity<Grade> createClass(@RequestBody Grade grade) {
        Grade response = gradeRepository.save(grade);
        return ResponseEntity.ok(response);
    }
}