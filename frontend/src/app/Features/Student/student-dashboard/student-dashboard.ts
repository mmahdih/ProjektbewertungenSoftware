import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { DashboardNavbar } from "../../../Shared/Components/dashboard-navbar/dashboard-navbar";
import { StudentSidebar } from '../student-sidebar/student-sidebar';

@Component({
  selector: 'app-student-dashboard',
  imports: [RouterOutlet, MatIcon, DashboardNavbar, StudentSidebar],
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.css'
})
export class StudentDashboard {

}
