package de.assessify.app.assessifyapi.api.UserRepository;

import de.assessify.app.assessifyapi.api.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface QuestionRepository extends JpaRepository<Question, UUID> {
}
