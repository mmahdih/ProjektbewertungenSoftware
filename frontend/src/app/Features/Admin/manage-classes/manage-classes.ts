import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ClassService } from './class.service';
import { Class } from '../../../Interfaces/class.interface';
import { PageHeaderComponents } from '../../../Shared/Components/page-header/page-header';
import {
  TableColumn,
  TableColumnComponent,
} from '../../../Shared/Components/table-column/table-column';
import { FormField, FormModalComponent } from '../../../Shared/Components/form-modal/form-modal';

@Component({
  selector: 'app-manage-classes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    PageHeaderComponents,
    TableColumnComponent,
    FormModalComponent,
  ],
  templateUrl: './manage-classes.html',
})
export class ManageClasses implements OnInit {
  classes: Class[] = [];
  loading = true;

  columns: TableColumn<Class>[] = [{ key: 'name', label: 'Kursname' }];

  fields: FormField[] = [
    {
      key: 'name',
      label: 'Kursname',
      type: 'text',
      required: true,
      colSpan: 6,
      placeholder: 'Kursname',
    },
  ];

  name = '';

  showAddModel: boolean = false;
  showEditModal: boolean = false;

  editingClass: Class | null = null;

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

  openEditModal(schoolClass: Class) {
    this.editingClass = schoolClass;
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
    this.editingClass = null;
  }

  saveEdit(formData: any) {
    if (!this.editingClass) return;

    const updatedClass = { ...this.editingClass, ...formData };

    console.log(formData);
    console.log(updatedClass.id);

    this.classService.updateClass(updatedClass).subscribe({
      next: (res: Class) => {
        const index = this.classes.findIndex((s) => s.id === updatedClass.id);
        if (index !== -1) this.classes[index] = res;
        this.closeEditModal();
      },
      error: (err: any) => console.error('Fehler beim Aktualisieren:', err),
    });
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
      },
    });
  }

  saveClass(formData: any) {
    const dto = {
      name: formData.name,
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

  this.classService.updateClass(this.selectedClass.id, dto)
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