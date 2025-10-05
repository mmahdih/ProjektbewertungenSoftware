package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.DTOs.ProjectDto;
import de.assessify.app.assessifyapi.api.UserRepository.ProjectRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/show/all/projects")
public class GetAllProjectsController {
    private final ProjectRepository projectRepository;

    public GetAllProjectsController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @GetMapping
    public List<ProjectDto> getAllProjects() {
        return projectRepository.findAll().stream()
            .map(p -> new ProjectDto(p.getId(), p.getProjectName(), p.getProjectDescription()))
                .toList();
    }
}
