package de.assessify.app.assessifyapi.api.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<String> handleNotFound(EntityNotFoundException ex) {
        return ResponseEntity.status(404).body(ex.getMessage());
    }

    @ExceptionHandler(InvalidRelationException.class)
    public ResponseEntity<String> handleInvalidRelation(InvalidRelationException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }
}
