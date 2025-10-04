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
@Table(name = "learning_field")
public class LearningField {
    @Id
    @UuidGenerator
    @Column(name = "learning_field_id", nullable = false, unique = true)
    private UUID id;

    @Column(name = "learning_field_name", nullable = false)
    private String LearningFieldName;

    @Column(name = "learning_field_description", nullable = false)
    private String LearningFieldDescription;

    @Column(name = "learning_field_Weighting", nullable = false)
    private float LearningFieldWeighting;

    @ManyToMany(mappedBy = "learningFields")
    @JsonIgnore
    private List<User> users = new ArrayList<>();

    @ManyToMany(mappedBy = "learningFields")
    @JsonIgnore
    private List<Project> projects = new ArrayList<>();

    @OneToMany(mappedBy = "learningField", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Grade> grades = new ArrayList<>();
}
