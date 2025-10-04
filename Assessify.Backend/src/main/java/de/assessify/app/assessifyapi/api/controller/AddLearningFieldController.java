package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.LearningFieldRepository;
import de.assessify.app.assessifyapi.api.model.LearningField;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/add/learning_field")
public class AddLearningFieldController {
    private final LearningFieldRepository learningFieldRepository;

    public AddLearningFieldController(LearningFieldRepository learningFieldRepository) {
        this.learningFieldRepository = learningFieldRepository;
    }

    @PostMapping
    public ResponseEntity<LearningField> createClass(@RequestBody LearningField learningField) {
        LearningField response = learningFieldRepository.save(learningField);
        return ResponseEntity.ok(response);
    }
}