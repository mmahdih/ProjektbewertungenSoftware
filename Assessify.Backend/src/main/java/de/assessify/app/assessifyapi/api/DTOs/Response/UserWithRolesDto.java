package de.assessify.app.assessifyapi.api.DTOs.Response;

import java.util.List;
import java.util.UUID;

public record UserWithRolesDto (
    UUID id,
    String firstName,
    String lastName,
    String email,
    List<RoleDto> roles
) {}
