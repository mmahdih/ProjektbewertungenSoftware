package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.RoleRepository;
import de.assessify.app.assessifyapi.api.UserRepository.UserRepository;
import de.assessify.app.assessifyapi.api.model.Role;
import de.assessify.app.assessifyapi.api.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/user")
public class ConnectRoleWithUser {
    private final RoleRepository roleRepository;

    private final UserRepository userRepository;

    public ConnectRoleWithUser(RoleRepository roleRepository, UserRepository userRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }

    @PostMapping("/{userId}/connect/role/{roleId}")
    public ResponseEntity<User> addGradeToLearningField(
            @PathVariable UUID userId,
            @PathVariable UUID roleId){

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new RuntimeException("role not found"));

        if (!user.getRoles().contains(role)) {
            user.getRoles().add(role);
        }

        User updatedUser = userRepository.save(user);

        return ResponseEntity.ok(updatedUser);
    }
}
