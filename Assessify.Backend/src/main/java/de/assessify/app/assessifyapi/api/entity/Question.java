package de.assessify.app.assessifyapi.api.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Data
@Table(name = "question")
public class Question {
    @Id
    @UuidGenerator
    @Column(name = "question_id", nullable = false, unique = true)
    private UUID id;

    @Column(name = "question_text", nullable = false)
    private String questionText;
}