import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { AdminSidebar } from "../admin-sidebar/admin-sidebar";
import { DashboardNavbar } from "../../../Shared/Components/dashboard-navbar/dashboard-navbar";
import { RouterOutlet } from "@angular/router";
import { Sidebar } from '../../../layout/sidebar/sidebar';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatInputModule, DashboardNavbar, Sidebar],
  templateUrl: './admin-export.html',
  styleUrl: './admin-export.css'
})
export class Export {
}

