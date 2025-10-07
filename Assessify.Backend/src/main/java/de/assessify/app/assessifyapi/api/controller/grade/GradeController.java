package de.assessify.app.assessifyapi.api.controller.grade;

import de.assessify.app.assessifyapi.api.dtos.request.AddGradeDto;
import de.assessify.app.assessifyapi.api.dtos.response.GradeDto;
import de.assessify.app.assessifyapi.api.userrepository.GradeRepository;
import de.assessify.app.assessifyapi.api.userrepository.TrainingModuleRepository;
import de.assessify.app.assessifyapi.api.userrepository.UserRepository;
import de.assessify.app.assessifyapi.api.entity.Grade;
import de.assessify.app.assessifyapi.api.entity.TrainingModule;
import de.assessify.app.assessifyapi.api.entity.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
