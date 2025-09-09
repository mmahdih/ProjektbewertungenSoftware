package de.assessify.app.assessifyapi.api.UserRepository;


import de.assessify.app.assessifyapi.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, String>{
}
