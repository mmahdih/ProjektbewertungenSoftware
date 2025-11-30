package de.assessify.app.assessifyapi.api.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id", nullable = false, unique = true)
    private int id;

    @Column(name = "role_name", nullable = false)
    private String RoleName;
}
