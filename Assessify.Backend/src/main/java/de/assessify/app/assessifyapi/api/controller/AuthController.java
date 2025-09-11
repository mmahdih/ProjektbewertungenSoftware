package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.model.LoginDto;
import de.assessify.app.assessifyapi.api.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/api/auth/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {
        if (authService.authenticateUser(loginDto.getUsername(), loginDto.getPassword())) {
            return new ResponseEntity<>("Login successful!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
    }
}