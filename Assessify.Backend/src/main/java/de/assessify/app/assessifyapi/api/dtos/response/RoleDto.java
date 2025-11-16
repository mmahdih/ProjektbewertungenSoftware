package de.assessify.app.assessifyapi.api.dtos.response;

import java.util.UUID;

public record RoleDto (
        UUID id,
        String name
) {}
