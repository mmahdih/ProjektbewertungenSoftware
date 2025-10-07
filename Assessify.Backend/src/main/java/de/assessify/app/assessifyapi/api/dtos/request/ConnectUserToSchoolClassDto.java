package de.assessify.app.assessifyapi.api.dtos.request;

import java.util.UUID;

public record ConnectUserToSchoolClassDto (
    UUID userId,
    UUID schoolClassId
){}
