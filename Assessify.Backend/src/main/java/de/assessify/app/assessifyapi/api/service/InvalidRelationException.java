package de.assessify.app.assessifyapi.api.service;

public class InvalidRelationException extends RuntimeException {
    public InvalidRelationException(String message) {
        super(message);
    }
}
