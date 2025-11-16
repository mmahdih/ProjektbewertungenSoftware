package de.assessify.app.assessifyapi.api.dtos.request;

import java.util.UUID;

public record AddReviewAnswerDto (UUID id, float rating){}