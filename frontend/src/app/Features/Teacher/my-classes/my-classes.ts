import { Component, OnInit } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { Class } from '../../../Interfaces/class.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyClassService } from './my-classes.service';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-my-classes',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatSelectModule],
  templateUrl: './my-classes.html',
  styleUrl: './my-classes.css'
})
export class MyClasses implements OnInit{
  classes: Class[] = [];
  allClasses: Class[] = [];
  loading = true;

  selectedClassId: string | null = null;

  name = '';

  showAddModel: boolean = false;
  showEditModel: boolean = false;
  selectedClass: Class | null = null;

  constructor(private myClassService: MyClassService) {}

  ngOnInit(): void {
    this.loadClasses();
    this.loadAllClasses();
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
    this.myClassService.getClass().subscribe({
      next: (data) => {
        console.log('API Data:', data);
        this.classes = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Fehler beim Laden der Klassen', err);
        this.loading = false;
      }
    });
  }

  loadAllClasses() {
    this.myClassService.getAllClasses().subscribe({
      next: (data) => {
        console.log('API Data:', data);
        this.allClasses = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Fehler beim Laden der Lehrer', err);
        this.loading = false;
      }
    });
  }

  connectClass() {
    console.log("yeag");
  }
}
