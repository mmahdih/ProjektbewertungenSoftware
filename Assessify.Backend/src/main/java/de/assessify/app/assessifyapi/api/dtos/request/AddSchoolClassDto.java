package de.assessify.app.assessifyapi.api.dtos.request;

import java.util.UUID;

public record AddSchoolClassDto (
        UUID id,
        String name
) {}
