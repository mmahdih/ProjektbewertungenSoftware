package de.assessify.app.assessifyapi.api.userrepository;

import de.assessify.app.assessifyapi.api.entity.TrainingModule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface LearningFieldRepository extends JpaRepository<TrainingModule, UUID> {
}
