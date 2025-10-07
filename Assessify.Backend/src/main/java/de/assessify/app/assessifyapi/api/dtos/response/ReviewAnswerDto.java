package de.assessify.app.assessifyapi.api.dtos.response;

import java.util.UUID;

public record ReviewAnswerDto (
        UUID id,
        UUID questionId,
        String questionText,
        UUID reviewedUserId,
        String reviewedUser,
        float rating
){}