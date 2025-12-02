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
  
  bewertung = new Map<string,number[]>();
  questions: string[] = [
    '1: Wie schätzen sie das Engagment im Projekt ein?',
    '2: Wie zielgerichtet wurde an der Aufgabenstellung gearbeitet?',
    '3: Wie beurteilen Sie die Zusammenarbeit mit den anderen Gruppenmitgliedern?',
    '4: Wie beurteilen Sie das Arbeitsverhalten?',
    '5: Wie beurteilen Sie das Engagment hinsichtlich der Aufgabenbearbeitung am Arduino mit Sensoren/Aktoren?',
    '6: Beurteilen Sie das Engagment bei der Realisierung der Netzwerk-Funktionalität (MQTT/Vernetzung)?',
    '7: Wie war das Engagment bie dir Umsetzung der Datenbank?',
    '8: Wie war das Engagment bei der Gestalltung und Entwicklung der Benutzerschnittstellen?',
    '9: Beurteilen Sie das Engagment bei der Realisierung der Funktionalität (Java-Backend/Vernetzung)?',
    '10: Beurteilen Sie die Mitarbeit bei der Erstellung des Werbeflyers?',
    '11: Welche Gesamtnote würen Sie der jeweiligen Person für Ihren beitrag zum Gelingen des Projektes geben?'
  ];

  frage =  0;

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

deleteAll(){
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
    this.bewertung.set(this.questions[this.frage],this.ratings);
    console.log(this.bewertung)
    this.ratings = [0, 0, 0, 0, 0]; 
    this.frage++;
    /**
     * TODO: bewertung zu JSON umwandeln
     */
  }
  }
}


