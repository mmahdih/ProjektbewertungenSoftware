package de.assessify.app.assessifyapi.api.controller.user;

import de.assessify.app.assessifyapi.api.dtos.request.AddUserDto;
import de.assessify.app.assessifyapi.api.dtos.response.UserDto;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import de.assessify.app.assessifyapi.api.userrepository.UserRepository;
import de.assessify.app.assessifyapi.api.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/show/all/users")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        var modules = userRepository.findAll()
                .stream()
                .map(field -> new UserDto(
                        field.getId(),
                        field.getFirstName(),
                        field.getLastName(),
                        field.getEmail(),
                        field.getCreatedAt()
                ))
                .toList();

        return ResponseEntity.ok(modules);
    }

    @PostMapping("/add/user")
    public ResponseEntity<UserDto> createUser(@RequestBody AddUserDto dto) {
        User user = new User();
        user.setFirstName(dto.firstName());
        user.setLastName(dto.lastName());
        user.setPassword(passwordEncoder.encode(dto.password()));
        user.setEmail(dto.email());

        User savedUser = userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new UserDto(savedUser.getId(), savedUser.getFirstName(), savedUser.getLastName(), savedUser.getEmail(), savedUser.getCreatedAt()));
    }
}
