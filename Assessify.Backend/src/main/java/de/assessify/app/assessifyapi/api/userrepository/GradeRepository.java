package de.assessify.app.assessifyapi.api.userrepository;

import de.assessify.app.assessifyapi.api.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GradeRepository extends JpaRepository<Grade, UUID> {
}