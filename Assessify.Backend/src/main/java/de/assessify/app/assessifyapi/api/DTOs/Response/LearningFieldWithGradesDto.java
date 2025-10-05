package de.assessify.app.assessifyapi.api.DTOs.Response;

import java.util.List;
import java.util.UUID;

public record LearningFieldWithGradesDto (
      UUID id,
      String name,
      String description,
      float weighting,
      List<GradeDto> grades
) {}
