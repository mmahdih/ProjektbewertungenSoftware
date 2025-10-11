package de.assessify.app.assessifyapi.api.dtos.response;

import java.util.Date;
import java.util.UUID;

public record GradeDto(UUID id, Float value, Float weighting, Date date) {}
