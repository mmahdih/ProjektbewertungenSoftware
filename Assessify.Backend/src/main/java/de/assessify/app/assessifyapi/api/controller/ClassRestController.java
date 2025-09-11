package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.model.SchoolClass;
import de.assessify.app.assessifyapi.api.UserRepository.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/class")
public class ClassRestController {
    private final ClassRepository classRepository;

    @Autowired
    public ClassRestController(ClassRepository classRepository) {
        this.classRepository = classRepository;
    }

    @GetMapping
    public List<SchoolClass> getAllUsers() {
        return classRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<SchoolClass> createClass(@RequestBody SchoolClass schoolClass) {
        try {
            SchoolClass _schoolclass = classRepository.save(schoolClass);
            return new ResponseEntity<>(_schoolclass, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
