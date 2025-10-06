package de.assessify.app.assessifyapi.api.DTOs.Response;

import java.util.List;
import java.util.UUID;

public record UserWithSchoolClassDto(
        UUID id,
        String firstName,
        String lastName,
        String email,
        List<SchoolClassDto> schoolClasses
) {}
