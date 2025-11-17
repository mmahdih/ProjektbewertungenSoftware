import { Component } from '@angular/core';
import { DashboardNavbar } from "../Shared/Components/dashboard-navbar/dashboard-navbar";
import { AdminSidebar } from "../Features/Admin/admin-sidebar/admin-sidebar";
import { MatIcon } from "@angular/material/icon";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-settings',
  imports: [DashboardNavbar, AdminSidebar, MatIcon, RouterOutlet],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {

}
