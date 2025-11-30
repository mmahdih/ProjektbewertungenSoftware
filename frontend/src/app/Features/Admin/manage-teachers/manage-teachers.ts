import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { DashboardNavbar } from "../../../layout/dashboard-navbar/dashboard-navbar";
import { Sidebar } from "../../../layout/sidebar/sidebar";
import { TeacherService } from './teacher.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../Interfaces/user.interface';

@Component({
  selector: 'app-manage-teachers',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './manage-teachers.html',
  styleUrl: './manage-teachers.css'
})
export class ManageTeachers implements OnInit{
  teachers: User[] = [];
  loading = true;

  showAddModel: boolean = false;

  firstName = '';
  lastName = '';
  username = '';
  password = '';
  role = ''

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.loadTeachers();
  }

  openAddModel(): void {
    this.showAddModel = true;
  }

  closeAddModel(): void {
    this.showAddModel = false;
  }

  loadTeachers() {
    this.teacherService.getTeachers().subscribe({
      next: (data) => {
        console.log('API Data:', data);
        this.teachers = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Fehler beim Laden der Lehrer', err);
        this.loading = false;
      }
    });
  }

  saveTeacher() {
    const dto = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      password: this.password,
      role: 1
    };

    this.teacherService.createTeacher(dto).subscribe({
      next: (teacher) => {
        this.teachers.push(teacher); // direkt zur Liste hinzufügen
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