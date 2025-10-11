package de.assessify.app.assessifyapi.api.dtos.request;

import java.time.LocalDateTime;

public record AddUserDto (String firstName, String lastName, String email, String password, LocalDateTime date){}