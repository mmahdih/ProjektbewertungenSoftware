package de.assessify.app.assessifyapi.api.controller.project;

import de.assessify.app.assessifyapi.api.dtos.request.AddProjectDto;
import de.assessify.app.assessifyapi.api.dtos.request.UpdateProjectDto;
import de.assessify.app.assessifyapi.api.dtos.response.ProjectDto;
import de.assessify.app.assessifyapi.api.dtos.response.ProjectWithTrainingModulesDto;
import de.assessify.app.assessifyapi.api.dtos.response.TrainingModuleSummaryDto;
import de.assessify.app.assessifyapi.api.userrepository.TrainingModuleRepository;
import de.assessify.app.assessifyapi.api.userrepository.ProjectRepository;
import de.assessify.app.assessifyapi.api.entity.Project;
import de.assessify.app.assessifyapi.api.entity.TrainingModule;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class ProjectController {
    private final ProjectRepository projectRepository;
    private final TrainingModuleRepository trainingModuleRepository;

    public ProjectController(ProjectRepository projectRepository, TrainingModuleRepository trainingModuleRepository) {
        this.projectRepository = projectRepository;
        this.trainingModuleRepository = trainingModuleRepository;
    }

    @GetMapping("/show/all/projects")
    public ResponseEntity<List<ProjectDto>> getAllProjects() {
        var modules = projectRepository.findAll()
                .stream()
                .map(field -> new ProjectDto(
                        field.getId(),
                        field.getProjectName(),
                        field.getProjectDescription()
                ))
                .toList();

        return ResponseEntity.ok(modules);
    }

    @PostMapping("/add/project")
    public ResponseEntity<ProjectDto> addProject(@RequestBody AddProjectDto dto) {

        Project entity = new Project();
        entity.setProjectName(dto.name());
        entity.setProjectDescription(dto.description());

        Project saved = projectRepository.save(entity);

        ProjectDto response = new ProjectDto(
                saved.getId(),
                saved.getProjectName(),
                saved.getProjectDescription()
        );

        return ResponseEntity.ok(response);
    }

    @PostMapping("project/{projectId}/connect/training-module/{trainingModulesId}")
    public ResponseEntity<ProjectWithTrainingModulesDto> addProjectToTrainingModule(
            @PathVariable UUID projectId,
            @PathVariable UUID trainingModulesId){

        TrainingModule trainingModule = trainingModuleRepository.findById(trainingModulesId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Training Module not found"));

        if (!trainingModule.getProjects().contains(project)) {
            trainingModule.getProjects().add(project);
            project.getTrainingModules().add(trainingModule);
        }

        Project updated = projectRepository.save(project);

        ProjectWithTrainingModulesDto response = new ProjectWithTrainingModulesDto(
                updated.getId(),
                updated.getProjectName(),
                updated.getProjectDescription(),
                updated.getTrainingModules().stream()
                        .map(r -> new TrainingModuleSummaryDto(
                                r.getId(),
                                r.getName(),
                                r.getDescription(),
                                r.getWeighting()
                        ))
                        .toList()
        );

        return ResponseEntity.ok(response);
    }
    @PutMapping("/project/{projectId}")
    public ResponseEntity<ProjectDto> updateProject(
            @PathVariable UUID projectId,
            @RequestBody UpdateProjectDto dto) {

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        if (dto.name() != null) project.setProjectName(dto.name());
        if (dto.description() != null) project.setProjectDescription(dto.description());

        Project updated = projectRepository.save(project);

        ProjectDto response = new ProjectDto(
                updated.getId(),
                updated.getProjectName(),
                updated.getProjectDescription()
        );

        return ResponseEntity.ok(response);
    }
}
