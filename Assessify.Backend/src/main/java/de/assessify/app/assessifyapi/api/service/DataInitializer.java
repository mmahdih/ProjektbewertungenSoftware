package de.assessify.app.assessifyapi.api.service;

import de.assessify.app.assessifyapi.api.entity.Role;
import de.assessify.app.assessifyapi.api.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {
    private final RoleRepository roleRepository;

    public DataInitializer(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        createRoleIfNotExists(1, "TEACHER");
        createRoleIfNotExists(2, "STUDENT");
        createRoleIfNotExists(3, "ADMIN");
    }

    private void createRoleIfNotExists(Integer id, String name) {
        if (!roleRepository.existsById(id)) {
            roleRepository.save(new Role(id, name));
            System.out.println("Role created: " + name);
        }
    }
}
