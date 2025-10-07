package de.assessify.app.assessifyapi.api.controller.question;

import de.assessify.app.assessifyapi.api.dtos.request.AddQuestionDto;
import de.assessify.app.assessifyapi.api.dtos.request.UpdateQuestionDto;
import de.assessify.app.assessifyapi.api.dtos.response.QuestionDto;
import de.assessify.app.assessifyapi.api.entity.Question;
import de.assessify.app.assessifyapi.api.userrepository.QuestionRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class QuestionController {
    private final QuestionRepository questionRepository;

    public QuestionController(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @GetMapping("/show/all/questions")
    public ResponseEntity<List<QuestionDto>> getAllQuestions() {
        var modules = questionRepository.findAll()
                .stream()
                .map(field -> new QuestionDto(
                        field.getId(),
                        field.getQuestionText()
                ))
                .toList();

        return ResponseEntity.ok(modules);
    }

    @PostMapping("/add/question")
    public ResponseEntity<QuestionDto> createQuestion(
            @RequestBody AddQuestionDto dto) {

        Question entity = new Question();
        entity.setQuestionText(dto.questionText());

        Question saved = questionRepository.save(entity);

        QuestionDto response = new QuestionDto(
                saved.getId(),
                saved.getQuestionText()
        );

        return ResponseEntity.ok(response);
    }

    @PutMapping("/update/question/{questionId}")
    public ResponseEntity<QuestionDto> updateQuestion(
            @PathVariable UUID questionId,
            @RequestBody UpdateQuestionDto dto) {

        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("Question not found"));

        question.setQuestionText(dto.questionText());

        Question updated = questionRepository.save(question);

        QuestionDto response = new QuestionDto(
                updated.getId(),
                updated.getQuestionText()
        );

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/delete/question/{questionId}")
    public ResponseEntity<Void> deleteQuestion(
            @PathVariable UUID questionId) {

        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("Question not found"));

        questionRepository.delete(question);
        return ResponseEntity.noContent().build();
    }
}
