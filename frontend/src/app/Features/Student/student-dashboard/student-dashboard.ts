import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { DashboardNavbar } from "../../../layout/dashboard-navbar/dashboard-navbar";
import { Sidebar } from '../../../layout/sidebar/sidebar';

@Component({
  selector: 'app-student-dashboard',
  imports: [RouterOutlet, MatIcon, DashboardNavbar, Sidebar],
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.css'
})
export class StudentDashboard {

}
