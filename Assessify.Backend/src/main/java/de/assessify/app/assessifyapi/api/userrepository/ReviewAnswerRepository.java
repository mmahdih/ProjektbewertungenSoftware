package de.assessify.app.assessifyapi.api.userrepository;

import de.assessify.app.assessifyapi.api.entity.ReviewAnswer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ReviewAnswerRepository extends JpaRepository<ReviewAnswer, UUID> {
}
