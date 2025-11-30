import { Component, OnInit } from '@angular/core';
import { MatTableModule } from "@angular/material/table"
import { User } from '../../../Interfaces/user.interface';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-manage-students',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './manage-students.html',
  styleUrl: './manage-students.css'
})
export class ManageStudents implements OnInit {
  students: User[] = [];
  loading = true;

  showAddModel: boolean = false;

  firstName = '';
  lastName = '';
  username = '';
  password = '';
  role = ''

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  openAddModel(): void {
    this.showAddModel = true;
  }

  closeAddModel(): void {
    this.showAddModel = false;
  }

  loadStudents() {
    this.studentService.getStudent().subscribe({
      next: (data) => {
        console.log('API Data:', data);
        this.students = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Fehler beim Laden der Lehrer', err);
        this.loading = false;
      }
    });
  }

  saveStudent() {
    const dto = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      password: this.password,
      role: 1
    };

    this.studentService.createStudent(dto).subscribe({
      next: (student) => {
        this.students.push(student); // direkt zur Liste hinzufügen
        this.closeAddModel();
        // Reset Form
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.password = '';
        this.role = '';
      },
      error: (err) => console.error('Fehler beim Erstellen:', err)
    });
  }
}