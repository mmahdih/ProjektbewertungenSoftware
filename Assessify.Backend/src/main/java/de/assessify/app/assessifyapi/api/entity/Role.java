package de.assessify.app.assessifyapi.api.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.UuidGenerator;

import java.util.ArrayList;
import java.util.List;
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

    @ManyToMany(mappedBy = "roles")
    @JsonIgnore
    private List<User> users = new ArrayList<>();
}
