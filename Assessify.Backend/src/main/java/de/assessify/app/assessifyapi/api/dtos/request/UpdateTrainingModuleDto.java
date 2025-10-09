package de.assessify.app.assessifyapi.api.dtos.request;

import java.util.UUID;

public record UpdateTrainingModuleDto (UUID id, String name, String description, float weighting){ }
