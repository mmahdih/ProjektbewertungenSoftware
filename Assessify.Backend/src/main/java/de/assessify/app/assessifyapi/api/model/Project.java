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
@Table(name = "project")
public class Project {
    @Id
    @UuidGenerator
    @Column(name = "project_id", nullable = false, unique = true)
    private UUID id;

    @Column(name = "project_name", nullable = false)
    private String ProjectName;

    @Column(name = "project_description", nullable = false)
    private String ProjectDescription;
}