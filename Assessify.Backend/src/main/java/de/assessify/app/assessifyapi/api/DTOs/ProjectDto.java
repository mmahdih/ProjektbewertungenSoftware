package de.assessify.app.assessifyapi.api.DTOs;

import java.util.UUID;

public record ProjectDto(UUID id, String projectName, String projectDescription) {}
