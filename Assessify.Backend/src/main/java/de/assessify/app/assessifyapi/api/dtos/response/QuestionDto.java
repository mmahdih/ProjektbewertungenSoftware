package de.assessify.app.assessifyapi.api.dtos.response;

import java.util.UUID;

public record QuestionDto(
       UUID id,
       String questionText
) {}
