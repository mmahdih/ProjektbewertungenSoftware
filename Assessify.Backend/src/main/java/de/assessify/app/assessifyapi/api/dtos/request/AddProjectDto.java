package de.assessify.app.assessifyapi.api.dtos.request;

import java.util.UUID;

public record AddProjectDto(
        UUID id,
        String name,
        String description
) {}
