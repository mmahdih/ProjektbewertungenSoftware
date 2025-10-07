package de.assessify.app.assessifyapi.api.dtos.response;

import java.util.UUID;

public record ProjectDto(
        UUID id,
        String name,
        String description
) {}
