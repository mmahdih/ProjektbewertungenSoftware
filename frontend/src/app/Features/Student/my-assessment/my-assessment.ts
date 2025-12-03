import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-results',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './my-assessment.html',
  styleUrl: './my-assessment.css'
})
export class MyAssessment {


  form: FormGroup;

  bewertung = new Map<string, number[]>();
  questions = [
    {
      id: 0,
      question: 'Wie schätzen sie das Engagment im Projekt ein?'
    },

    {
      id: 1,
      question: 'Wie zielgerichtet wurde an der Aufgabenstellung gearbeitet?'
    },

    {
      id: 2,
      question: 'Wie beurteilen Sie die Zusammenarbeit mit den anderen Gruppenmitgliedern?'
    },

    {
      id: 4,
      question: 'Wie beurteilen Sie das Arbeitsverhalten?'
    },

    {
      id: 5,
      question: 'Wie beurteilen Sie das Engagment hinsichtlich der Aufgabenbearbeitung am Arduino mit Sensoren/Aktoren?'
    },

    {
      id: 6,
      question: 'Beurteilen Sie das Engagment bei der Realisierung der Netzwerk-Funktionalität (MQTT/Vernetzung)?'
    },

    {
      id: 7,
      question: 'Wie war das Engagment bie dir Umsetzung der Datenbank?'
    },

    {
      id: 8, question: 'Wie war das Engagment bei der Gestalltung und Entwicklung der Benutzerschnittstellen?'
    },

    {
      id: 9,
      question: 'Beurteilen Sie das Engagment bei der Realisierung der Funktionalität (Java-Backend/Vernetzung)?'
    },

    {
      id: 10,
      question: 'Beurteilen Sie die Mitarbeit bei der Erstellung des Werbeflyers?'
    },

    {
      id: 11,
      question: 'Welche Gesamtnote würen Sie der jeweiligen Person für Ihren beitrag zum Gelingen des Projektes geben?'
    }
  ];

  frage = 0;

  members = [
    { id: 0, name: 'Teammitglied 1' },
    { id: 1, name: 'Teammitglied 2' },
    { id: 2, name: 'Teammitglied 3' },
    { id: 3, name: 'Teammitglied 4' },
    { id: 4, name: 'Teammitglied 5' }
  ];

  ratings: number[] = this.members.map(_ => 0);

  constructor(private fb: FormBuilder) {
    // Für jedes Mitglied ein Pflichtfeld (required)
    this.form = this.fb.group({});
    this.members.forEach(m => {
      this.form.addControl(
        `rating_${m.id}`,
        this.fb.control(null, Validators.required)
      );
    });
  }

  setRating(memberId: number, value: number) {
    this.ratings[memberId] = value;
  }

  deleteAll() {
    this.bewertung.clear;
    this.ratings = [];
    this.frage = 0;
  }

  submitRating() {
    const missing: string[] = [];

    this.members.forEach(m => {
      const ctrl = this.ratings[m.id];
      if (ctrl === 0) {
        missing.push(m.name);
      }
    });

    if (missing.length > 0) {
      alert(`❌ Folgende Mitglieder fehlen noch: ${missing.join(', ')}`);
      this.form.markAllAsTouched();
    } else {
      this.bewertung.set(this.questions[this.frage].question, this.ratings);
      this.createJson(this.frage, this.questions, this.members, this.ratings);
      this.ratings = [0, 0, 0, 0, 0];
      this.frage++;
      /**
       * TODO: bewertung zu JSON umwandeln
       */
    }
  }


  createJson(currentQuestion: number, wholeQuestion: { id: number, question: string }[], members: { id: number; name: string }[], ratings: number[]) {
    const question = wholeQuestion.find(q => q.id === currentQuestion)

    const students = members.map(m => ({
      studentID: m.id,
      grade: ratings[m.id]
    }))


    const json = {
      question: question
        ? {
          questionID: question.id,
          questionText: question.question
        }
        : null,
      students: students
    };

    console.log(JSON.stringify(json));
    return JSON.stringify(json);

  }
}


