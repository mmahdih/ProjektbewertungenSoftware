import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Student } from '../../../Interfaces/student.interface';
import { StudentService } from '../../../core/services/student.service';

@Component({
  selector: 'app-my-students',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './my-students.html',
  styleUrls: ['./my-students.css']
})
export class MyStudents implements OnInit {
  students: Student[] = [];
  selectedStudent: Student | null = null;

  // toggles
  showEditModel = false;
  showAddModel = false;
  showDeleteModel = false;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    const STUDENT_ROLE_ID = 2;

    this.studentService.getStudentsByRole(STUDENT_ROLE_ID).subscribe({
      next: (students: Student[]) => {
        console.log('Students aus Backend:', students);
        this.students = students;
      },
      error: (err: unknown) => {
        console.error('Fehler beim Laden der Studenten', err);
      }
    });
  }

  openEditModel(student: Student): void {
    this.selectedStudent = student;
    this.showEditModel = true;
  }

  closeEditModel(): void {
    this.showEditModel = false;
  }

  openAddModel(): void {
    this.showAddModel = true;
  }

  closeAddModel(): void {
    this.showAddModel = false;
  }

  openDeleteModel(): void {
    this.showDeleteModel = true;
  }

  closeDeleteModel(): void {
    this.showDeleteModel = false;
  }
}
