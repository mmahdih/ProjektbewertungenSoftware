import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table"


@Component({
  selector: 'app-manage-students',
  imports: [MatIconModule, MatTableModule],
  templateUrl: './manage-students.html',
  styleUrl: './manage-students.css'
})
export class ManageStudents {
}
