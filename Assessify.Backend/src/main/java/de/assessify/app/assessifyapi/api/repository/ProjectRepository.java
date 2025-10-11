package de.assessify.app.assessifyapi.api.repository;

import de.assessify.app.assessifyapi.api.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProjectRepository extends JpaRepository<Project, UUID> {
}