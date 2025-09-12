package de.assessify.app.assessifyapi.api.UserRepository;

import de.assessify.app.assessifyapi.api.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RoleRepository extends JpaRepository<Role, UUID> {
}
