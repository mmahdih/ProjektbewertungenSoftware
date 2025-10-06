package de.assessify.app.assessifyapi.api.dtos.response;

import java.util.List;
import java.util.UUID;

public record UserWithModulesDto(
        UUID id,
        String firstName,
        String lastName,
        String email,
        List<TrainingModuleSummaryDto> trainingModules
) {}
