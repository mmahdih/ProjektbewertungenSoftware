package de.assessify.app.assessifyapi.api.dtos.request;

import java.util.Date;
import java.util.UUID;

public record AddGradeDto(
        UUID id,
        float value,
        float weighting,
        Date date
) {}
