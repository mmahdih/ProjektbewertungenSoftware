import { Component, OnInit } from '@angular/core';
import { AdminService} from './admin.service'
import {MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../Interfaces/user.interface';

@Component({
  selector: 'app-manage-teachers',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './manage-admin.html',
  styleUrl: './manage-admin.css'
})
export class ManageAdmins implements OnInit{
  admins: User[] = [];
  loading = true;

  showAddModel: boolean = false;

  firstName = '';
  lastName = '';
  username = '';
  password = '';
  role = ''

  constructor(private AdminService: AdminService) {}

  ngOnInit(): void {
    this.loadAdmin();
  }

  openAddModel(): void {
    this.showAddModel = true;
  }

  closeAddModel(): void {
    this.showAddModel = false;
  }

  loadAdmin() {
    this.AdminService.getAdmins().subscribe({
      next: (data) => {
        console.log('API Data:', data);
        this.admins = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Fehler beim Laden der Admins', err);
        this.loading = false;
      }
    });
  }

  saveAdmin() {
    const dto = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      password: this.password,
      role: 1
    };

    this.AdminService.createAdmin(dto).subscribe({
      next: (adminUser) => {
        this.admins.push(adminUser); // direkt zur Liste hinzufügen
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