package de.assessify.app.assessifyapi.api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.UuidGenerator;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Table(name = "training-module")
public class TrainingModule {
    @Id
    @UuidGenerator
    @Column(name = "training-module_id", nullable = false, unique = true)
    private UUID id;

    @Column(name = "training-module_name", nullable = false)
    private String name;

    @Column(name = "training-module_description", nullable = false)
    private String description;

    @Column(name = "training-module_Weighting", nullable = false)
    private float weighting;

    @ManyToMany(mappedBy = "trainingModules")
    @JsonIgnore
    private List<User> users = new ArrayList<>();

    @ManyToMany(mappedBy = "trainingModules")
    @JsonIgnore
    private List<Project> projects = new ArrayList<>();

    @OneToMany(mappedBy = "trainingModules", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Grade> grades = new ArrayList<>();
}
