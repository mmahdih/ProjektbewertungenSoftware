package de.assessify.app.assessifyapi.api.DTOs.Request;

import java.util.UUID;

public record AddProjectDto(
        UUID id,
        String name,
        String description
) {}
