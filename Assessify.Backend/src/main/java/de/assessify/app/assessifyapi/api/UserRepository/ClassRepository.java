package de.assessify.app.assessifyapi.api.UserRepository;

import de.assessify.app.assessifyapi.api.model.SchoolClass;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ClassRepository extends JpaRepository<SchoolClass, UUID> {
}
