package de.assessify.app.assessifyapi.api.service;

import de.assessify.app.assessifyapi.api.entity.User;
import de.assessify.app.assessifyapi.api.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository,
                       BCryptPasswordEncoder passwordEncoder,
                       JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public String loginAndGetJwt(String username, String rawPassword) {
        if (username == null || rawPassword == null) {
            return null;
        }

        Optional<User> optionalUser =
                userRepository.findByUsernameIgnoreCase(username.trim());

        if (optionalUser.isEmpty()) {
            return null;
        }

        User user = optionalUser.get();

        boolean matches = passwordEncoder.matches(rawPassword, user.getPassword());
        if (!matches) {
            return null;
        }

        return jwtService.generateToken(user);
    }
}
