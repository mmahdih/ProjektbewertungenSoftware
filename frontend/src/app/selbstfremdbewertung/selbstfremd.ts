import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selbstfremd',
  templateUrl: './selbstfremd.html',
  styleUrls: ['./selbstfremd.css'],
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  CommonModule]
})
export class selbstfremd {

  form: FormGroup;

  test: string[] = ['Frage1', 'Frage2', 'Frage3', 'Frage4', 'Frage5'];
  frage =  0; 
  rating = 0;
  rating2 = 0;
  rating3 = 0;
  rating4 = 0;
  rating5 = 0;
  grades: number[] = [];
  grades2: number[] = [];

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

setRating99(memberId: number, value: number) {
  this.ratings[memberId] = value;
}

submitRating2() {
    const missing: string[] = [];

    this.members.forEach(m => {
    const ctrl = this.ratings[m.id];
    console.log("ctrl: " + ctrl);
    if (ctrl === 0) {
      missing.push(m.name);
    }
  });

  if (missing.length > 0) {
    alert(`❌ Folgende Mitglieder fehlen noch: ${missing.join(', ')}`);
    this.form.markAllAsTouched();
  } else {
    alert('✅ Alle Bewertungen gespeichert!');
    console.log(this.form.value);
    console.log('Bewertung gespeichert:', this.ratings); 
    this.ratings = [0, 0, 0, 0, 0]; 
    this.frage++;
  }
  }
}
