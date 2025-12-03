import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { DashboardNavbar } from "../../../layout/dashboard-navbar/dashboard-navbar";
import { Sidebar } from "../../../layout/sidebar/sidebar";
import { TeacherService } from './teacher.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../Interfaces/user.interface';
import { PageHeaderComponents } from '../../../Shared/Components/page-header/page-header';
import { TableColumn, TableColumnComponent } from '../../../Shared/Components/table-column/table-column';

@Component({
  selector: 'app-manage-teachers',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule, PageHeaderComponents, TableColumnComponent],
  templateUrl: './manage-teachers.html'
})
export class ManageTeachers implements OnInit{
  teachers: User[] = [];
  loading = true;

  columns: TableColumn<User>[] = [
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'username', label: 'Username' },
  { key: 'roleName', label: 'Role' }
  ];

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