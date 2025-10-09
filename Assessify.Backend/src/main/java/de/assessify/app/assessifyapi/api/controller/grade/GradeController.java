package de.assessify.app.assessifyapi.api.controller.grade;

import de.assessify.app.assessifyapi.api.dtos.request.AddGradeDto;
import de.assessify.app.assessifyapi.api.dtos.request.UpdateGradeDto;
import de.assessify.app.assessifyapi.api.dtos.response.GradeDto;
import de.assessify.app.assessifyapi.api.dtos.response.LearningFieldWithGradesDto;
import de.assessify.app.assessifyapi.api.userrepository.GradeRepository;
import de.assessify.app.assessifyapi.api.userrepository.TrainingModuleRepository;
import de.assessify.app.assessifyapi.api.userrepository.UserRepository;
import de.assessify.app.assessifyapi.api.entity.Grade;
import de.assessify.app.assessifyapi.api.entity.TrainingModule;
import de.assessify.app.assessifyapi.api.entity.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class GradeController {
    private final GradeRepository gradeRepository;

    private final TrainingModuleRepository learningFieldRepository;

    private final UserRepository userRepository;

    public GradeController(GradeRepository gradeRepository, TrainingModuleRepository learningFieldRepository, UserRepository userRepository) {
        this.gradeRepository = gradeRepository;
        this.learningFieldRepository = learningFieldRepository;
        this.userRepository = userRepository;
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

    @PostMapping("/user/{userId}/training-modules/{trainingModulesId}/new/grade")
    public ResponseEntity<GradeDto> addGradeToTrainingModule(
            @PathVariable UUID userId,
            @PathVariable UUID trainingModulesId,
            @RequestBody AddGradeDto dto){

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        TrainingModule trainingModule = learningFieldRepository.findById(trainingModulesId)
                .orElseThrow(() -> new RuntimeException("Training Module not found"));

        if (!user.getTrainingModules().contains(trainingModule)) {
            throw new RuntimeException("User is not enrolled in this Training Module");
        }

        Grade grade = new Grade();
        grade.setValue(dto.value());
        grade.setGradeWeighting(dto.weighting());
        grade.setDate(dto.date());
        grade.setTrainingModules(trainingModule);

        Grade savedGrade = gradeRepository.save(grade);

        GradeDto response = new GradeDto(
                savedGrade.getId(),
                savedGrade.getValue(),
                savedGrade.getGradeWeighting(),
                savedGrade.getDate()
        );

        return ResponseEntity.ok(response);
    }

    @PutMapping("/user/{userId}/training-modules/{trainingModulesId}/grade/{gradeId}/update")
    public ResponseEntity<GradeDto> updateGrade(
            @PathVariable UUID userId,
            @PathVariable UUID trainingModulesId,
            @PathVariable UUID gradeId,
            @RequestBody UpdateGradeDto dto) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        TrainingModule trainingModule = learningFieldRepository.findById(trainingModulesId)
                .orElseThrow(() -> new RuntimeException("Training Module not found"));

        Grade grade = gradeRepository.findById(gradeId)
                .orElseThrow(() -> new RuntimeException("Grade not found"));

        if (!grade.getTrainingModules().equals(trainingModule)) {
            throw new RuntimeException("Grade does not belong to this Training Module");
        }

        if (dto.value() != null) grade.setValue(dto.value());
        if (dto.weighting() != null) grade.setGradeWeighting(dto.weighting());
        if (dto.date() != null) grade.setDate(dto.date());

        System.out.println(dto.weighting());

        Grade updated = gradeRepository.save(grade);

        GradeDto response = new GradeDto(
                updated.getId(),
                updated.getValue(),
                updated.getGradeWeighting(),
                updated.getDate()
        );

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/user/{userId}/training-modules/{trainingModulesId}/grade/{gradeId}")
    public ResponseEntity<Void> deleteGrade(
            @PathVariable UUID userId,
            @PathVariable UUID trainingModulesId,
            @PathVariable UUID gradeId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        TrainingModule trainingModule = learningFieldRepository.findById(trainingModulesId)
                .orElseThrow(() -> new RuntimeException("Training Module not found"));

        Grade grade = gradeRepository.findById(gradeId)
                .orElseThrow(() -> new RuntimeException("Grade not found"));

        if (!grade.getTrainingModules().equals(trainingModule)) {
            throw new RuntimeException("Grade does not belong to this Training Module");
        }

        gradeRepository.delete(grade);
        return ResponseEntity.noContent().build();
    }

}
