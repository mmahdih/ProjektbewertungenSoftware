import { Component, OnInit } from '@angular/core';
import { AdminService} from './admin.service'
import {MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../Interfaces/user.interface';
import { AuthService } from '../../../core/auth/auth.service'

@Component({
  selector: 'app-manage-admin',
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
  confirmPassword ='';
  role = ''

  constructor(private AdminService: AdminService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadAdmin();
  }

  openAddModel(): void {
    this.showAddModel = true;
  }

  closeAddModal(): void {
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
    if (this.password === this.confirmPassword) {
        
    }
    const dto = {
  firstName: this.firstName,
  lastName: this.lastName,
  username: this.username,
  password: this.password,
  role: this.authService.getRoleId() 
};
    

    this.AdminService.createAdmin(dto).subscribe({
      next: (adminUser) => {
        this.admins.push(adminUser); // direkt zur Liste hinzufügen
        this.closeAddModal();
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