package de.assessify.app.assessifyapi.api.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.UuidGenerator;

import java.util.Date;
import java.util.UUID;

@Entity
@Data
@Table(name = "grade")
public class Grade {
    @Id
    @UuidGenerator
    @Column(name = "grade_id", nullable = false, unique = true)
    private UUID id;

    @Column(name = "value", nullable = false)
    private float value;

    @Column(name = "grade_weighting", nullable = false)
    private float gradeWeighting;

    @Column(name = "date", nullable = false)
    private Date date;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "training-module_id", nullable = false)
    @JsonBackReference
    private TrainingModule trainingModules;
}
