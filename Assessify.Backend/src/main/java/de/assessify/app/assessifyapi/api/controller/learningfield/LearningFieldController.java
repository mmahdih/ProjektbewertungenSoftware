package de.assessify.app.assessifyapi.api.controller.learningfield;

import de.assessify.app.assessifyapi.api.dtos.request.AddTrainingModuleDto;
import de.assessify.app.assessifyapi.api.dtos.request.UpdateTrainingModuleDto;
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
    private final TrainingModuleRepository trainingModuleRepository;
    private final UserRepository userRepository;

    public LearningFieldController(TrainingModuleRepository learningFieldRepository, UserRepository userRepository) {
        this.trainingModuleRepository = learningFieldRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/show/all/training-modules")
    public ResponseEntity<List<TrainingModuleSummaryDto>> getAllTrainingModules() {
        var modules = trainingModuleRepository.findAll()
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

    @PostMapping("/add/training-modules")
    public ResponseEntity<TrainingModuleSummaryDto> createTrainingModule(
            @RequestBody AddTrainingModuleDto dto) {

        TrainingModule entity = new TrainingModule();
        entity.setName(dto.name());
        entity.setDescription(dto.description());
        entity.setWeighting(dto.weighting());

        TrainingModule saved = trainingModuleRepository.save(entity);

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

        TrainingModule trainingModule = trainingModuleRepository.findById(trainingModulesId)
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

    @PutMapping("/training-modules/{trainingModulesId}")
    public ResponseEntity<TrainingModuleSummaryDto> updateTrainingModule(
            @PathVariable UUID trainingModulesId,
            @RequestBody UpdateTrainingModuleDto dto) {
        
        TrainingModule trainingModule = trainingModuleRepository.findById(trainingModulesId)
                .orElseThrow(() -> new RuntimeException("Training Module not found"));

        if (dto.description() != null) trainingModule.setDescription(dto.description());
        if (dto.name() != null) trainingModule.setName(dto.name());
        trainingModule.setWeighting(dto.weighting());
        
        TrainingModule updated = trainingModuleRepository.save(trainingModule);

        TrainingModuleSummaryDto response = new TrainingModuleSummaryDto(
                updated.getId(),
                updated.getName(),
                updated.getDescription(),
                updated.getWeighting()
        );

        return ResponseEntity.ok(response);
    }
}
