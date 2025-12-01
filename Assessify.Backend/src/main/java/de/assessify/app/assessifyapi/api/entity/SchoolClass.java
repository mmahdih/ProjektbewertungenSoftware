package de.assessify.app.assessifyapi.api.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "school_class")
public class SchoolClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "class_id", nullable = false, unique = true)
    private int id;

    @Column(name = "class_name", nullable = false)
    private String schoolClassName;
}