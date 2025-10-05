package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.ClassRepository;
import de.assessify.app.assessifyapi.api.model.SchoolClass;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/show/all/classes")
public class GetAllClassController {
    private final ClassRepository classRepository;

    public GetAllClassController(ClassRepository classRepository) {
        this.classRepository = classRepository;
    }

    @GetMapping
    public List<SchoolClass> getAllClasses() {
        return classRepository.findAll();
    }
}
