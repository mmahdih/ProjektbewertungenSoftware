import { Component, OnInit } from '@angular/core';
import { AddUser, User } from '../../../Interfaces/user.interface';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PageHeaderComponents } from '../../../Shared/Components/page-header/page-header';
import { TableColumn, TableColumnComponent } from '../../../Shared/Components/table-column/table-column';

@Component({
  selector: 'app-manage-students',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, PageHeaderComponents, TableColumnComponent],
  templateUrl: './manage-students.html'
})
export class ManageStudents implements OnInit {
  students: User[] = [];
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
  role = '';

  tempPassword: string | null = null;

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
        console.error('Fehler beim Laden der Schüler', err);
        this.loading = false;
      }
    });
  }

  saveStudent() {
    const dto: AddUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      password: this.password,
      role: 2
    };

    this.studentService.createStudent(dto).subscribe({
      next: (student) => {
        this.students.push(student);
        this.closeAddModel();
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.password = '';
        this.role = '';
      },
      error: (err) => console.error('Fehler beim Erstellen:', err)
    });
  }

  onResetPassword(student: User) {
    if (!confirm(`Passwort für ${student.firstName} ${student.lastName} wirklich zurücksetzen?`)) {
      return;
    }

    this.studentService.resetPassword(student.id).subscribe({
      next: (res) => {
        console.log('Neues temporäres Passwort:', res.temporaryPassword);
        this.tempPassword = res.temporaryPassword;
      },
      error: (err) => {
        console.error('Fehler beim Zurücksetzen des Passworts', err);
        alert('Passwort konnte nicht zurückgesetzt werden.');
      }
    });
  }
}
