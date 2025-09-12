package de.assessify.app.assessifyapi.api.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
    private float Value;

    @Column(name = "grade_weighting", nullable = false)
    private float GradeWeighting;

    @Column(name = "date", nullable = false)
    private Date Date;
}
