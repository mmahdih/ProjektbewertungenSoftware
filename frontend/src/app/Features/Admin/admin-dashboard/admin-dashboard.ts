import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { AdminSidebar } from "../admin-sidebar/admin-sidebar";
import { DashboardNavbar } from "../../../Shared/Components/dashboard-navbar/dashboard-navbar";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatInputModule, DashboardNavbar, AdminSidebar],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {
}
