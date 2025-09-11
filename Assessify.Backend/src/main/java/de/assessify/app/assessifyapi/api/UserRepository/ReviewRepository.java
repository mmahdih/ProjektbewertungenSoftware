package de.assessify.app.assessifyapi.api.UserRepository;

import de.assessify.app.assessifyapi.api.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ReviewRepository extends JpaRepository<Review, UUID> {
}
