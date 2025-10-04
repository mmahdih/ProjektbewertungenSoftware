package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.ClassRepository;
import de.assessify.app.assessifyapi.api.model.SchoolClass;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/add/class")
public class AddClassController {
    private final ClassRepository classRepository;

    public AddClassController(ClassRepository classRepository) {
        this.classRepository = classRepository;
    }

    @PostMapping
    public ResponseEntity<SchoolClass> createClass(@RequestBody SchoolClass schoolClass) {
        SchoolClass response = classRepository.save(schoolClass);
        return ResponseEntity.ok(response);
    }
}
