package de.assessify.app.assessifyapi.api.controller.user;

import de.assessify.app.assessifyapi.api.dtos.request.AddUserDto;
import de.assessify.app.assessifyapi.api.dtos.response.UserDto;
import de.assessify.app.assessifyapi.api.repository.RoleRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import de.assessify.app.assessifyapi.api.repository.UserRepository;
import de.assessify.app.assessifyapi.api.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    public UserController(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
    }

    @GetMapping("/teacher")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        var modules = userRepository.findAll()
                .stream()
                .map(field -> {

                    var role = roleRepository.findById(field.getRoleId())
                            .orElse(null);

                    return new UserDto(
                            field.getId(),
                            field.getFirstName(),
                            field.getLastName(),
                            field.getUsername(),
                            field.getCreatedAt(),
                            role != null ? role.getRoleName() : null
                    );
                })
                .toList();

        return ResponseEntity.ok(modules);
    }

    @PostMapping("/teacher")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<UserDto> createUserTeacher(@RequestBody AddUserDto dto) {
        User user = new User();
        user.setFirstName(dto.firstName());
        user.setLastName(dto.lastName());
        user.setPassword(passwordEncoder.encode(dto.password()));
        user.setUsername(dto.username());
        user.setRoleId(1);

        User savedUser = userRepository.save(user);

        var role = roleRepository.findById(savedUser.getRoleId())
                .orElse(null);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new UserDto(
                        savedUser.getId(),
                        savedUser.getFirstName(),
                        savedUser.getLastName(),
                        savedUser.getUsername(),
                        savedUser.getCreatedAt(),
                        role != null ? role.getRoleName() : null
                ));
    }
}