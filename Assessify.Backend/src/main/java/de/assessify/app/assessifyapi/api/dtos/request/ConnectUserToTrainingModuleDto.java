package de.assessify.app.assessifyapi.api.dtos.request;

import java.util.UUID;

public record ConnectUserToTrainingModuleDto(
   UUID userId,
   UUID trainingModuleId
) {}
