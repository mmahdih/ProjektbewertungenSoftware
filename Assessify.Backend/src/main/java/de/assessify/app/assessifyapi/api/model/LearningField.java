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
}
