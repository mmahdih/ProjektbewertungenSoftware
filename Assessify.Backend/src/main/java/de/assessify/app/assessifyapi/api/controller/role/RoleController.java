package de.assessify.app.assessifyapi.api.controller.role;

import de.assessify.app.assessifyapi.api.dtos.request.AddRoleDto;
import de.assessify.app.assessifyapi.api.dtos.request.UpdateRoleDto;
import de.assessify.app.assessifyapi.api.dtos.response.RoleDto;
import de.assessify.app.assessifyapi.api.dtos.response.UserWithRolesDto;
import de.assessify.app.assessifyapi.api.userrepository.RoleRepository;
import de.assessify.app.assessifyapi.api.userrepository.UserRepository;
import de.assessify.app.assessifyapi.api.entity.Role;
import de.assessify.app.assessifyapi.api.entity.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class RoleController {
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    public RoleController(RoleRepository roleRepository, UserRepository userRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/show/all/roles")
    public ResponseEntity<List<RoleDto>> getAllRoles() {
        var modules = roleRepository.findAll()
                .stream()
                .map(field -> new RoleDto(
                        field.getId(),
                        field.getRoleName()
                ))
                .toList();

        return ResponseEntity.ok(modules);
    }

    @PostMapping("/add/role")
    public ResponseEntity<RoleDto> addRole(@RequestBody AddRoleDto dto) {

        Role entity = new Role();
        entity.setRoleName(dto.name());

        Role saved = roleRepository.save(entity);

        RoleDto response = new RoleDto(
                saved.getId(),
                saved.getRoleName()
        );

        return ResponseEntity.ok(response);
    }

    @PostMapping("/user/{userId}/connect/role/{roleId}")
    public ResponseEntity<UserWithRolesDto> addRoleToUser(
            @PathVariable UUID userId,
            @PathVariable UUID roleId){

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("user not found"));

        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new RuntimeException("Training Module not found"));

        if (!user.getRoles().contains(role)) {
            user.getRoles().add(role);
        }

        User updatedUser = userRepository.save(user);

        UserWithRolesDto response = new UserWithRolesDto(
                updatedUser.getId(),
                updatedUser.getFirstName(),
                updatedUser.getFirstName(),
                updatedUser.getEmail(),
                updatedUser.getRoles().stream()
                        .map(r -> new RoleDto(r.getId(), r.getRoleName()))
                        .toList()
        );

        return ResponseEntity.ok(response);
    }
    @PutMapping("/role/{roleId}")
    public ResponseEntity<RoleDto> updateRole(
            @PathVariable UUID roleId,
            @RequestBody UpdateRoleDto dto) {

        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new RuntimeException("Role not found"));

        role.setRoleName(dto.name());

        Role updated = roleRepository.save(role);

        RoleDto response = new RoleDto(
                updated.getId(),
                updated.getRoleName()
        );

        return ResponseEntity.ok(response);
    }
}
