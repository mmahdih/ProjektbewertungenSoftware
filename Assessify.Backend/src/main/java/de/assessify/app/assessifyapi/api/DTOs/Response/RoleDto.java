package de.assessify.app.assessifyapi.api.DTOs.Response;

import java.util.UUID;

public record RoleDto (
        UUID id,
        String name
) {}
