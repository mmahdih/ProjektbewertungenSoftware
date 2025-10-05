package de.assessify.app.assessifyapi.api.DTOs.Response;

import java.util.UUID;

public record ProjectDto(UUID id, String projectName, String projectDescription) {}
