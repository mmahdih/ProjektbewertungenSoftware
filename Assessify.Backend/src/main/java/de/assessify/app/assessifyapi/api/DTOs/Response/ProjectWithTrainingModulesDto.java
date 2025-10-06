package de.assessify.app.assessifyapi.api.DTOs.Response;

import java.util.List;
import java.util.UUID;

public record ProjectWithTrainingModulesDto(
        UUID id,
        String name,
        String description,
        List<TrainingModuleSummaryDto> modules
) {}
