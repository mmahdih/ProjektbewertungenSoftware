package de.assessify.app.assessifyapi.api.dtos.request;

import java.util.UUID;

public record AddReviewDto(
        UUID id,
        float grade
) {}