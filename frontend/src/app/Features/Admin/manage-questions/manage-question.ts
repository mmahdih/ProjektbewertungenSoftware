import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Question } from '../../../Interfaces/question.interface';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './manage-question.html',
  styleUrl: './manage-question.css'
})
export class ManageQuestions implements OnInit{
  questions: Question[] = [];
  loading = true;
  showAddModel: boolean = false;
  selectedQuestion: Question | null = null;
  showEditModel: boolean = false;

  questionText = '';

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  openEditModel(question: Question): void {
    this.selectedQuestion = question;
    this.showEditModel = true;
  }

  closeEditModel(): void {
    this.showEditModel = false;
  }

  openAddModel(): void {
    this.showAddModel = true;
  }

  closeAddModel(): void {
    this.showAddModel = false;
  }

  loadQuestions() {
    this.questionService.getQuestions().subscribe({
      next: (data) => {
        console.log('API Data:', data);
        this.questions = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Fehler beim Laden der Lehrer', err);
        this.loading = false;
      }
    });
  }

  saveQuestion() {
    const dto = {
      questionText: this.questionText,
    };

    this.questionService.createQuestion(dto).subscribe({
      next: (question) => {
        this.questions.push(question); // direkt zur Liste hinzufügen
        this.closeAddModel();
        // Reset Form
        this.questionText = '';
      },
      error: (err) => console.error('Fehler beim Erstellen:', err)
    });
  }

  saveEditedQuestion() {
  if (!this.selectedQuestion) return;

  const dto = {
    questionText: this.questionText
  };

  this.questionService.updateQuestion(this.selectedQuestion.id, dto)
    .subscribe({
      next: (updated) => {
        const index = this.questions.findIndex(q => q.id === updated.id);
        if (index !== -1) this.questions[index] = updated;

        this.closeEditModel();
      },
      error: (err) => console.error('Fehler beim Aktualisieren:', err)
    });
  }
}
