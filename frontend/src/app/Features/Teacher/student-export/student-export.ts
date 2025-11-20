import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { RouterOutlet } from "@angular/router";
import { DashboardNavbar } from "../../../Shared/Components/dashboard-navbar/dashboard-navbar";
import { Sidebar } from '../../../layout/sidebar/sidebar';

@Component({
  selector: 'app-teacher-dashboard',
  imports: [MatIcon, RouterOutlet, DashboardNavbar, Sidebar],
  templateUrl: './student-export.html',
  styleUrl: './student-export.css'
})
export class StudentExport {

}
