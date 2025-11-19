import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { RouterOutlet } from "@angular/router";
import { DashboardNavbar } from "../../../layout/dashboard-navbar/dashboard-navbar";
import { Sidebar } from '../../../layout/sidebar/sidebar';

@Component({
  selector: 'app-teacher-dashboard',
  imports: [MatIcon, RouterOutlet, DashboardNavbar, Sidebar],
  templateUrl: './teacher-dashboard.html',
  styleUrl: './teacher-dashboard.css'
})
export class TeacherDashboard {

}
