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
@Table(name = "question")
public class Question {
    @Id
    @UuidGenerator
    @Column(name = "question_id", nullable = false, unique = true)
    private UUID id;

    @Column(name = "question_text", nullable = false)
    private String QuestionText;
}