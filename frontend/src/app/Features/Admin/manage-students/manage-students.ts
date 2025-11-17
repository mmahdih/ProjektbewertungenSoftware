import { Component } from '@angular/core';
import { Sidebar } from '../../../Shared/Components/sidebar/sidebar';
import { DashboardNavbar } from '../../../Shared/Components/dashboard-navbar/dashboard-navbar';
import { MatIcon } from "@angular/material/icon";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-manage-students',
  imports: [Sidebar, DashboardNavbar, MatIcon, RouterOutlet],
  templateUrl: './manage-students.html',
  styleUrl: './manage-students.css'
})
export class ManageStudents {

}
