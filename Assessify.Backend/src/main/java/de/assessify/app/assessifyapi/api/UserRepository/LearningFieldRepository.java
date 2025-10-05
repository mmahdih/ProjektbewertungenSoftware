package de.assessify.app.assessifyapi.api.UserRepository;

import de.assessify.app.assessifyapi.api.model.TrainingModule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface LearningFieldRepository extends JpaRepository<TrainingModule, UUID> {
}
