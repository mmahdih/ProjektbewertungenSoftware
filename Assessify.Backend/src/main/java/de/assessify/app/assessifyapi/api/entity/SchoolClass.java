package de.assessify.app.assessifyapi.api.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Data
@Table(name = "school_class")
public class SchoolClass {
    @Id
    @UuidGenerator
    @Column(name = "class_id", nullable = false, unique = true)
    private UUID id;

    @Column(name = "class_name", nullable = false)
    private String schoolClassName;
}