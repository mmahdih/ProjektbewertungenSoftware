import { Component } from '@angular/core';
import { DashboardNavbar } from '../../../layout/dashboard-navbar/dashboard-navbar';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { RouterOutlet } from "@angular/router";
import { Sidebar } from "../../../layout/sidebar/sidebar";

@Component({
  selector: 'app-manage-students',
  imports: [MatIconModule],
  templateUrl: './manage-students.html',
  styleUrl: './manage-students.css'
})
export class ManageStudents {

}
