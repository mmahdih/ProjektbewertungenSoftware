package de.assessify.app.assessifyapi.api.repository;

import de.assessify.app.assessifyapi.api.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RoleRepository extends JpaRepository<Role, UUID> {
}
