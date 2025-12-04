package de.assessify.app.assessifyapi.api.dtos.request;

import java.util.UUID;

public record UpdateUserDto (UUID id, String firstName, String lastName, String username){}