import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ClassService } from './class.service';
import { Class } from '../../../Interfaces/class.interface';
import { PageHeaderComponents } from '../../../Shared/Components/page-header/page-header';

@Component({
  selector: 'app-manage-classes',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, PageHeaderComponents],
  templateUrl: './manage-classes.html'
})
export class ManageClasses implements OnInit{
  classes: Class[] = [];
  loading = true;

  name = '';

  showAddModel: boolean = false;
  showEditModel: boolean = false;
  selectedClass: Class | null = null;

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

  openEditModel(schoolClass: Class): void {
    this.selectedClass = schoolClass;
    this.showEditModel = true;
  }

  closeEditModel(): void {
    this.showEditModel = false;
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

  saveEditedClass() {
  if (!this.selectedClass) return;

  const dto = {
    name: this.name
  };

  this.classService.updateQuestion(this.selectedClass.id, dto)
    .subscribe({
      next: (updated) => {
        const index = this.classes.findIndex(q => q.id === updated.id);
        if (index !== -1) this.classes[index] = updated;

        this.closeEditModel();
      },
      error: (err) => console.error('Fehler beim Aktualisieren:', err)
    });
  }
}
