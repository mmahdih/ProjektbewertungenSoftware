package de.assessify.app.assessifyapi.api.repository;

import de.assessify.app.assessifyapi.api.entity.SchoolClass;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SchoolClassRepository extends JpaRepository<SchoolClass, UUID> {
}
