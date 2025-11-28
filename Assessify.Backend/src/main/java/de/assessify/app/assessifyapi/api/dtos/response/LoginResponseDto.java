package de.assessify.app.assessifyapi.api.dtos.response;

public record LoginResponseDto(
        String accessToken,
        String tokenType
) {

}
