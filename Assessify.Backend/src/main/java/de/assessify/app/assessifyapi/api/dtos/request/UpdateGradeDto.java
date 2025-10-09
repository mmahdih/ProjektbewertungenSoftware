package de.assessify.app.assessifyapi.api.dtos.request;

import java.util.Date;
import java.util.UUID;

public record UpdateGradeDto (
        UUID id,
        Float value,
        Float weighting,
        Date date
){}
