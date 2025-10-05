package de.assessify.app.assessifyapi.api.DTOs.Request;

import java.util.UUID;

public record ConnectUserToTrainingModuleDto(
   UUID userId,
   UUID trainingModuleId
) {}
