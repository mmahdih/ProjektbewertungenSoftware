package de.assessify.app.assessifyapi.api.userrepository;

import de.assessify.app.assessifyapi.api.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ReviewRepository extends JpaRepository<Review, UUID> {
}
