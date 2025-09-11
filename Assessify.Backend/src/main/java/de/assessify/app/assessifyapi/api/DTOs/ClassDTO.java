package de.assessify.app.assessifyapi.api.DTOs;

import java.util.UUID;

public class ClassDTO {
    private UUID id;
    private String className;

    public ClassDTO() {}

    public ClassDTO(UUID id, String className) {
        this.id = id;
        this.className = className;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getName() { return className; }
    public void setName(String name) { this.className = name; }
}
