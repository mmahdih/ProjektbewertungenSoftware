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

    test: string[] = ['Frage1', 'Frage2', 'Frage3', 'Frage4', 'Frage5'];
    frage =  0; 
  rating = 0;
  rating2 = 0;
  rating3 = 0;
  rating4 = 0;
  rating5 = 0;
  grades: number[] = [];
  grades2: number[] = [];

  setRating(value: number) {
    this.rating = value;
  }
  setRating2(value: number) {
    this.rating2 = value;
  }
  setRating3(value: number) {
    this.rating3 = value;
  }
  setRating4(value: number) {
    this.rating4 = value;
  }
  setRating5(value: number) {
    this.rating5 = value;
  }

  submitRating() {
    console.log('Bewertung gespeichert:', this.rating, this.rating2);
    this.grades.push(this.rating);
    this.grades.push(this.rating2);
    this.grades.push(this.rating3);
    this.grades.push(this.rating4);
    this.grades.push(this.rating5);
    console.log(this.grades);
    this.rating = 0;
    this.rating2 = 0;
    this.rating3 = 0;
    this.rating4 = 0;
    this.rating5 = 0;
  }

 members = [
  { id: 0, name: 'Teammitglied 1' },
  { id: 1, name: 'Teammitglied 2' },
  { id: 2, name: 'Teammitglied 3' },
  { id: 3, name: 'Teammitglied 4' },
  { id: 4, name: 'Teammitglied 5' }
];
ratings: number[] = this.members.map(_ => 0);

setRating99(memberId: number, value: number) {
  this.ratings[memberId] = value;
  let technotest = 'active4';
}

  setGrades(memberIndex: number, value: number) {
    console.log(`Set rating for member ${memberIndex+1} to ${value}`);
    this.ratings[memberIndex] = value;
  }
submitRating2() {
    console.log('Bewertung gespeichert:', this.ratings); // Kopiere die aktuellen Bewertungen in grades2
    this.ratings = [0, 0, 0, 0, 0]; // Setze alle Bewertungen zurück
    this.frage++;
  }

}
