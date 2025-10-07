package de.assessify.app.assessifyapi.api.dtos.response;

import java.util.List;
import java.util.UUID;

public record ProjectWithTrainingModulesDto(
        UUID id,
        String name,
        String description,
        List<TrainingModuleSummaryDto> modules
) {}
