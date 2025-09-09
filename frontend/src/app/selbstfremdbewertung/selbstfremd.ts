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

  setRating(value: number) {
    this.rating = value;
  }
  setRating2(value: number) {
    this.rating2 = value;
  }

  submitRating() {
    console.log('Bewertung gespeichert:', this.rating, this.rating2);
    // hier kannst du die Bewertung ans Backend schicken
  }
}
