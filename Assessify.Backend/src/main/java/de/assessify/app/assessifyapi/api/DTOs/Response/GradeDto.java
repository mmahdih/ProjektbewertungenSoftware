package de.assessify.app.assessifyapi.api.DTOs.Response;

import java.util.Date;
import java.util.UUID;

public record GradeDto(
        UUID id,
        Float value,
        Float weighting,
        Date date
)
{}
