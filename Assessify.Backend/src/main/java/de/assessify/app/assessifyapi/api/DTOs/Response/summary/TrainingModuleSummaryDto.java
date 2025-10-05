package de.assessify.app.assessifyapi.api.DTOs.Response.summary;

import java.util.UUID;

public record TrainingModuleSummaryDto(
        UUID id,
        String name,
        String description,
        float weighting
) {}
