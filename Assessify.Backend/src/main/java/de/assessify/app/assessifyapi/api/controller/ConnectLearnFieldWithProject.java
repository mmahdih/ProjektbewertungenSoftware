package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.LearningFieldRepository;
import de.assessify.app.assessifyapi.api.UserRepository.ProjectRepository;
import de.assessify.app.assessifyapi.api.model.LearningField;
import de.assessify.app.assessifyapi.api.model.Project;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/project")
public class ConnectLearnFieldWithProject {
    private final LearningFieldRepository learningFieldRepository;

    private final ProjectRepository projectRepository;

    public ConnectLearnFieldWithProject(LearningFieldRepository learningFieldRepository, ProjectRepository projectRepository) {
        this.learningFieldRepository = learningFieldRepository;
        this.projectRepository = projectRepository;
    }

    @PostMapping("/{projectId}/connect/learningfield/{learningfieldId}")
    public ResponseEntity<Project> addGradeToLearningField(
            @PathVariable UUID projectId,
            @PathVariable UUID learningfieldId){

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("project not found"));

        LearningField learningField = learningFieldRepository.findById(learningfieldId)
                .orElseThrow(() -> new RuntimeException("learn field not found"));

        if (!project.getLearningFields().contains(learningField)) {
            project.getLearningFields().add(learningField);
        }

        Project updatedProject = projectRepository.save(project);

        return ResponseEntity.ok(updatedProject);
    }
}
