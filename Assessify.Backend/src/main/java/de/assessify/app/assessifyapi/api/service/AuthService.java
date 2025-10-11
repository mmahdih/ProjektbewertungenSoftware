package de.assessify.app.assessifyapi.api.service;

import de.assessify.app.assessifyapi.api.repository.UserRepository;
import de.assessify.app.assessifyapi.api.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public AuthService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public boolean authenticateUser(String username, String password) {
        String[] names = username.split("\\."); // Trennt den Benutzernamen am Punkt
        if (names.length != 2) {
            return false; // Ungültiges Format
        }
        String firstName = names[0];
        String lastName = names[1];

        // Sucht den Benutzer anhand der aufgeteilten Namen
        Optional<User> userOptional = userRepository.findByFirstNameIgnoreCaseAndLastNameIgnoreCase(firstName, lastName);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            // Überprüft das Passwort
            if (passwordEncoder.matches(password, user.getPassword())) {
                return true;
            }
        }
        return false;
    }
}