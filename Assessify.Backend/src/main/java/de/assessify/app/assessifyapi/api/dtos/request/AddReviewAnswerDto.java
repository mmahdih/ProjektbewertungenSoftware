package de.assessify.app.assessifyapi.api.dtos.request;

import java.util.UUID;

public record AddReviewAnswerDto (
        UUID questionId,
        UUID reviewedUserId,
        float rating
){}
