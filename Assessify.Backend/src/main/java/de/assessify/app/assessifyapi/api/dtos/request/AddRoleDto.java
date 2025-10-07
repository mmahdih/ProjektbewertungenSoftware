package de.assessify.app.assessifyapi.api.dtos.request;

import java.util.UUID;

public record AddRoleDto (
        UUID id,
        String name
) {}
