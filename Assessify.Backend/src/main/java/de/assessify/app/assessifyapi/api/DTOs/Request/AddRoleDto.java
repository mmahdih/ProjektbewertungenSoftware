package de.assessify.app.assessifyapi.api.DTOs.Request;

import java.util.UUID;

public record AddRoleDto (
        UUID id,
        String name
) {}
