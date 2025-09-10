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
  rating = 0;
  rating2 = 0;
  rating3 = 0;
  rating4 = 0;
  rating5 = 0;
  grades: number[] = [];

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
}
