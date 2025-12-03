import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Question } from '../../../Interfaces/question.interface';
import { QuestionService } from './question.service';
import { PageHeaderComponents } from '../../../Shared/Components/page-header/page-header';
import {
  TableColumn,
  TableColumnComponent,
} from '../../../Shared/Components/table-column/table-column';
import { FormField, FormModalComponent } from '../../../Shared/Components/form-modal/form-modal';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    PageHeaderComponents,
    TableColumnComponent,
    FormModalComponent,
  ],
  templateUrl: './manage-question.html',
})
export class ManageQuestions implements OnInit {
  questions: Question[] = [];
  loading = true;
  showAddModel: boolean = false;
  selectedQuestion: Question | null = null;
  showEditModel: boolean = false;

  columns: TableColumn<Question>[] = [{ key: 'questionText', label: 'Frage' }];

  fields: FormField[] = [
    {
      key: 'questionText',
      label: 'Frage',
      type: 'textarea',
      required: true,
      placeholder: 'Deine Frage...',
    },
  ];

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
      },
    });
  }

  saveQuestion(formData: any) {
    const dto = {
      questionText: formData.questionText,
    };

    console.log(dto);

    this.questionService.createQuestion(dto).subscribe({
      next: (question) => {
        this.questions.push(question); // direkt zur Liste hinzufügen
        this.closeAddModel();
        // Reset Form
        this.questionText = '';
      },
      error: (err) => console.error('Fehler beim Erstellen:', err),
    });
  }

  saveEditedQuestion() {
    if (!this.selectedQuestion) return;

    const dto = {
      questionText: this.questionText,
    };

    this.questionService.updateQuestion(this.selectedQuestion.id, dto).subscribe({
      next: (updated) => {
        const index = this.questions.findIndex((q) => q.id === updated.id);
        if (index !== -1) this.questions[index] = updated;

        this.closeEditModel();
      },
      error: (err) => console.error('Fehler beim Aktualisieren:', err),
    });
  }
}