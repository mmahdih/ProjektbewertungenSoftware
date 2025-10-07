package de.assessify.app.assessifyapi.api.dtos.response;

import java.time.LocalDate;
import java.util.UUID;

public record ReviewDto(
        UUID id,
        float grade,
        LocalDate date,
        UUID userId,
        UUID projectId
) {}