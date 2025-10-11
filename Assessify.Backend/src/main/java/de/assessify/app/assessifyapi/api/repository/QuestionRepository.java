package de.assessify.app.assessifyapi.api.repository;

import de.assessify.app.assessifyapi.api.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface QuestionRepository extends JpaRepository<Question, UUID> {
}
