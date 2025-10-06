package de.assessify.app.assessifyapi.api.DTOs.Request;

import java.util.UUID;

public record AddSchoolClassDto (
        UUID id,
        String name
) {}
