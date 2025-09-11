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
@Table(name = "review")
public class Review {
    @Id
    @UuidGenerator
    @Column(name = "review_id", nullable = false, unique = true)
    private UUID id;

    @Column(name = "review_grade", nullable = false)
    private float Grade;

    @Column(name = "review_date", nullable = false)
    private Date Date;
}