import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { RouterOutlet } from "@angular/router";
import { DashboardNavbar } from "../../../Shared/Components/dashboard-navbar/dashboard-navbar";
import { TeacherSidebar } from "../teacher-sidebar/teacher-sidebar";

@Component({
  selector: 'app-teacher-dashboard',
  imports: [MatIcon, RouterOutlet, DashboardNavbar, TeacherSidebar],
  templateUrl: './teacher-dashboard.html',
  styleUrl: './teacher-dashboard.css'
})
export class TeacherDashboard {

}
