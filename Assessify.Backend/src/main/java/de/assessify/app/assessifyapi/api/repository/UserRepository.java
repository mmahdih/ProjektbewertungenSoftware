package de.assessify.app.assessifyapi.api.repository;

import de.assessify.app.assessifyapi.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByFirstNameIgnoreCaseAndLastNameIgnoreCase(String firstName, String lastName);
    List<User> findByRoleId(Integer roleId);
}