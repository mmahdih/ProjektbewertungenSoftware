package de.assessify.app.assessifyapi.api.DTOs.Response;

import java.time.LocalDateTime;
import java.util.UUID;

public record UserDto(
        UUID id,
        String firstName,
        String lastName,
        String email,
        LocalDateTime date
) {}
