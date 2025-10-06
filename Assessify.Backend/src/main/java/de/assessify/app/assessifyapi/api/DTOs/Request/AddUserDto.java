package de.assessify.app.assessifyapi.api.DTOs.Request;

import java.time.LocalDateTime;
import java.util.UUID;

public record AddUserDto (
        UUID id,
        String firstName,
        String lastName,
        String email,
        String password,
        LocalDateTime date
){}
