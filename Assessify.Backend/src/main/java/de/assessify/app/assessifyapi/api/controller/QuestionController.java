package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.GradeRepository;
import de.assessify.app.assessifyapi.api.UserRepository.QuestionRepository;
import de.assessify.app.assessifyapi.api.model.Grade;
import de.assessify.app.assessifyapi.api.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/question")
public class QuestionController {
    @Autowired
    private QuestionRepository questionRepository;

    @PostMapping
    public ResponseEntity<Question> createQuestion(@RequestBody Question question) {
        Question response = questionRepository.save(question);
        return ResponseEntity.ok(response);
    }
}
