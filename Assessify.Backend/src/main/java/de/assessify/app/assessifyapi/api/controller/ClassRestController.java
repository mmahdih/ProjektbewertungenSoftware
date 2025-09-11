package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.model.SchoolClass;
import de.assessify.app.assessifyapi.api.UserRepository.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/class")
public class ClassRestController {
    @Autowired
    private ClassRepository classRepository;

    @PostMapping
    public ResponseEntity<SchoolClass> createClass(@RequestBody SchoolClass schoolClass) {
       SchoolClass response = classRepository.save(schoolClass);
        return ResponseEntity.ok(response);
    }
}
