package de.assessify.app.assessifyapi.api.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Data
@Table(name = "role")
public class Role {
    @Id
    @UuidGenerator
    @Column(name = "role_id", nullable = false, unique = true)
    private UUID id;

    @Column(name = "role_name", nullable = false)
    private String RoleName;
}
