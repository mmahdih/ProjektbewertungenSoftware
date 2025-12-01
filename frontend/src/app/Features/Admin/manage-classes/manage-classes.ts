import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ClassService } from './class.service';
import { Class } from '../../../Interfaces/class.interface';

@Component({
  selector: 'app-manage-classes',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './manage-classes.html',
  styleUrl: './manage-classes.css'
})
export class ManageClasses implements OnInit{
  classes: Class[] = [];
  loading = true;

  name = '';

  showAddModel: boolean = false;

  constructor(private classService: ClassService) {}

  ngOnInit(): void {
    this.loadClasses();
  }

  openAddModel(): void {
    this.showAddModel = true;
  }

  closeAddModel(): void {
    this.showAddModel = false;
  }

  loadClasses() {
    this.classService.getClass().subscribe({
      next: (data) => {
        console.log('API Data:', data);
        this.classes = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Fehler beim Laden der Lehrer', err);
        this.loading = false;
      }
    });
  }

  saveClass() {
    const dto = {
      name: this.name
    };

    this.classService.createClass(dto).subscribe({
      next: (schoolclass) => {
        this.classes.push(schoolclass); // direkt zur Liste hinzufügen
        this.closeAddModel();
        // Reset Form
        this.name = '';
      },
      error: (err) => console.error('Fehler beim Erstellen:', err)
    });
  }
}
