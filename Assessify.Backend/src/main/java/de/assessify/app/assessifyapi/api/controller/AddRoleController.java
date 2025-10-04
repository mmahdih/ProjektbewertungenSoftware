package de.assessify.app.assessifyapi.api.controller;

import de.assessify.app.assessifyapi.api.UserRepository.RoleRepository;
import de.assessify.app.assessifyapi.api.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/add/role")
public class AddRoleController {
    @Autowired
    private RoleRepository roleRepository;

    @PostMapping
    public ResponseEntity<Role> createClass(@RequestBody Role role) {
        Role response = roleRepository.save(role);
        return ResponseEntity.ok(response);
    }
}
