package de.assessify.app.assessifyapi.api.model;

import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Table(name = "school_class")
public class SchoolClass {
    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "school_class_id", nullable = false, unique = true)
    private UUID id;

    @Column(name = "school_class_name", nullable = false)
    private String schoolClassName;

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getName() { return schoolClassName; }
    public void setName(String name) { this.schoolClassName = name; }
}