package de.assessify.app.assessifyapi.api.controller;
import de.assessify.app.assessifyapi.api.dtos.response.LoginResponseDto;
import de.assessify.app.assessifyapi.api.entity.LoginDto;
import de.assessify.app.assessifyapi.api.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // ✅ Das hier hinzufügen
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDto loginDto) {
        String token = authService.loginAndGetJwt(loginDto.getUsername(), loginDto.getPassword());
        if (token == null) {
            return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
        }
        LoginResponseDto response = new LoginResponseDto(
                token,
                "Bearer"
        );
        return ResponseEntity.ok(response);
    }
}