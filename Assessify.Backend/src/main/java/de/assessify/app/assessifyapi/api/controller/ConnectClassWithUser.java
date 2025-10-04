package de.assessify.app.assessifyapi.api.controller;


import de.assessify.app.assessifyapi.api.UserRepository.ClassRepository;
import de.assessify.app.assessifyapi.api.UserRepository.LearningFieldRepository;
import de.assessify.app.assessifyapi.api.UserRepository.RoleRepository;
import de.assessify.app.assessifyapi.api.UserRepository.UserRepository;
import de.assessify.app.assessifyapi.api.model.LearningField;
import de.assessify.app.assessifyapi.api.model.Role;
import de.assessify.app.assessifyapi.api.model.SchoolClass;
import de.assessify.app.assessifyapi.api.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/user")
public class ConnectClassWithUser {
    @Autowired
    private ClassRepository classRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/{userId}/connect/class/{classId}")
    public ResponseEntity<User> addClassToUser(
            @PathVariable UUID userId,
            @PathVariable UUID classId){

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        SchoolClass schoolClass = classRepository.findById(classId)
                .orElseThrow(() -> new RuntimeException("class not found"));

        if (!user.getSchoolClasses().contains(schoolClass)) {
            user.getSchoolClasses().add(schoolClass);
        }

        User updatedUser = userRepository.save(user);

        return ResponseEntity.ok(updatedUser);
    }
}
