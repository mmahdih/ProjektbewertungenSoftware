package de.assessify.app.assessifyapi.api.controller.learningfield;

import de.assessify.app.assessifyapi.api.dtos.request.AddTrainingModuleDto;
import de.assessify.app.assessifyapi.api.dtos.response.GradeDto;
import de.assessify.app.assessifyapi.api.dtos.response.LearningFieldWithGradesDto;
import de.assessify.app.assessifyapi.api.dtos.response.UserWithModulesDto;
import de.assessify.app.assessifyapi.api.dtos.response.TrainingModuleSummaryDto;
import de.assessify.app.assessifyapi.api.userrepository.TrainingModuleRepository;
import de.assessify.app.assessifyapi.api.userrepository.UserRepository;
import de.assessify.app.assessifyapi.api.entity.TrainingModule;
import de.assessify.app.assessifyapi.api.entity.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class LearningFieldController {
    private final TrainingModuleRepository learningFieldRepository;
    private final UserRepository userRepository;

    public LearningFieldController(TrainingModuleRepository learningFieldRepository, UserRepository userRepository) {
        this.learningFieldRepository = learningFieldRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/show/all/training-modules")
    public ResponseEntity<List<TrainingModuleSummaryDto>> getAllTrainingModules() {
        var modules = learningFieldRepository.findAll()
                .stream()
                .map(field -> new TrainingModuleSummaryDto(
                        field.getId(),
                        field.getName(),
                        field.getDescription(),
                        field.getWeighting()
                ))
                .toList();

        return ResponseEntity.ok(modules);
    }

    @GetMapping("/user/{userId}/show/all/grades")
    public ResponseEntity<List<LearningFieldWithGradesDto>> getGradesForTrainingModule(
            @PathVariable UUID userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        var modules = user.getTrainingModules()
                .stream()
                .map(field -> new LearningFieldWithGradesDto(
                        field.getId(),
                        field.getName(),
                        field.getDescription(),
                        field.getWeighting(),
                        field.getGrades().stream()
                                .map(g -> new GradeDto(
                                        g.getId(),
                                        g.getValue(),
                                        g.getGradeWeighting(),
                                        g.getDate()
                                ))
                                .toList()
                ))
                .toList();

        return ResponseEntity.ok(modules);
    }

    @GetMapping("/user/{userId}/training-modules/{trainingModulesId}/grades")
    public ResponseEntity<LearningFieldWithGradesDto> getGradesForLearningField(
            @PathVariable UUID userId,
            @PathVariable UUID trainingModulesId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        var module = user.getTrainingModules()
                .stream()
                .filter(field -> field.getId().equals(trainingModulesId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Training module not found or not assigned to user"));

        var dto = new LearningFieldWithGradesDto(
                module.getId(),
                module.getName(),
                module.getDescription(),
                module.getWeighting(),
        module.getGrades().stream()
                .map(g -> new GradeDto(
                        g.getId(),
                        g.getValue(),
                        g.getGradeWeighting(),
                        g.getDate()
                ))
                .toList()
        );

        return ResponseEntity.ok(dto);
    }

    @PostMapping("/add/training-modules")
    public ResponseEntity<TrainingModuleSummaryDto> createTrainingModule(
            @RequestBody AddTrainingModuleDto dto) {

        TrainingModule entity = new TrainingModule();
        entity.setName(dto.name());
        entity.setDescription(dto.description());
        entity.setWeighting(dto.weighting());

        TrainingModule saved = learningFieldRepository.save(entity);

        TrainingModuleSummaryDto response = new TrainingModuleSummaryDto(
                saved.getId(),
                saved.getName(),
                saved.getDescription(),
                saved.getWeighting()
        );

        return ResponseEntity.ok(response);
    }

    @PostMapping("/user/{userId}/connect/training-modules/{trainingModulesId}")
    public ResponseEntity<UserWithModulesDto> addGradeToTrainingModule(
            @PathVariable UUID userId,
            @PathVariable UUID trainingModulesId){

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        TrainingModule trainingModule = learningFieldRepository.findById(trainingModulesId)
                .orElseThrow(() -> new RuntimeException("Training Module not found"));

        if (!user.getTrainingModules().contains(trainingModule)) {
            user.getTrainingModules().add(trainingModule);
        }

        User updatedUser = userRepository.save(user);

        List<TrainingModuleSummaryDto> modules = user.getTrainingModules().stream()
                .map(field -> new TrainingModuleSummaryDto(
                        field.getId(),
                        field.getName(),
                        field.getDescription(),
                        field.getWeighting()
                ))
                .toList();

        UserWithModulesDto response = new UserWithModulesDto(
                updatedUser.getId(),
                updatedUser.getFirstName(),
                updatedUser.getLastName(),
                updatedUser.getEmail(),
                modules
        );
        return ResponseEntity.ok(response);
    }
}
