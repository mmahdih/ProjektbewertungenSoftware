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
@Table(name = "school_class")
public class SchoolClass {
    @Id
    @UuidGenerator
    @Column(name = "class_id", nullable = false, unique = true)
    private UUID id;

    @Column(name = "class_name", nullable = false)
    private String schoolClassName;

    @ManyToMany(mappedBy = "schoolClasses")
    @JsonIgnore
    private List<User> users = new ArrayList<>();
}