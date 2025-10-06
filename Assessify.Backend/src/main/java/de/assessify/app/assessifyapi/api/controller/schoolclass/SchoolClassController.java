package de.assessify.app.assessifyapi.api.controller.schoolclass;

import de.assessify.app.assessifyapi.api.dtos.request.AddSchoolClassDto;
import de.assessify.app.assessifyapi.api.dtos.response.SchoolClassDto;
import de.assessify.app.assessifyapi.api.dtos.response.UserWithSchoolClassDto;
import de.assessify.app.assessifyapi.api.userrepository.ClassRepository;
import de.assessify.app.assessifyapi.api.userrepository.UserRepository;
import de.assessify.app.assessifyapi.api.entity.SchoolClass;
import de.assessify.app.assessifyapi.api.entity.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class SchoolClassController {
    private final ClassRepository classRepository;
    private final UserRepository userRepository;

    public SchoolClassController(ClassRepository classRepository, UserRepository userRepository) {
        this.classRepository = classRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/show/all/school-class")
    public ResponseEntity<List<SchoolClassDto>> getAllSchoolClasses() {
        var modules = classRepository.findAll()
                .stream()
                .map(field -> new SchoolClassDto(
                        field.getId(),
                        field.getSchoolClassName()
                ))
                .toList();

        return ResponseEntity.ok(modules);
    }

    @PostMapping("/add/school-class")
    public ResponseEntity<SchoolClassDto> addSchoolClass(@RequestBody AddSchoolClassDto dto) {
       SchoolClass entity = new SchoolClass();
       entity.setSchoolClassName(dto.name());

       SchoolClass saved = classRepository.save(entity);

       SchoolClassDto response = new SchoolClassDto(
               saved.getId(),
               saved.getSchoolClassName()
       );

       return ResponseEntity.ok(response);
    }

    @PostMapping("/user/{userId}/connect/school-class/{schoolClassId}")
    public ResponseEntity<UserWithSchoolClassDto> addSchoolClassToUser(
            @PathVariable UUID userId,
            @PathVariable UUID schoolClassId){

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        SchoolClass schoolClass = classRepository.findById(schoolClassId)
                .orElseThrow(() -> new RuntimeException("Training Module not found"));

        if (!user.getSchoolClasses().contains(schoolClass)) {
            user.getSchoolClasses().add(schoolClass);
        }

        User updatedUser = userRepository.save(user);

        UserWithSchoolClassDto response = new UserWithSchoolClassDto(
                updatedUser.getId(),
                updatedUser.getFirstName(),
                updatedUser.getFirstName(),
                updatedUser.getEmail(),
                updatedUser.getSchoolClasses().stream()
                        .map(r -> new SchoolClassDto(r.getId(), r.getSchoolClassName()))
                        .toList()
        );

        return ResponseEntity.ok(response);
    }
}
