package de.assessify.app.assessifyapi.api.DTOs.Request;

import java.util.UUID;

public record ConnectUserToSchoolClassDto (
    UUID userId,
    UUID schoolClassId
){}
