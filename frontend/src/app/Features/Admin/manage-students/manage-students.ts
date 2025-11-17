import { Component } from '@angular/core';
import { DashboardNavbar } from '../../../Shared/Components/dashboard-navbar/dashboard-navbar';
import { MatIcon } from "@angular/material/icon";
import { RouterOutlet } from "@angular/router";
import { StudentSidebar } from "../../Student/student-sidebar/student-sidebar";
import { AdminSidebar } from "../admin-sidebar/admin-sidebar";

@Component({
  selector: 'app-manage-students',
  imports: [DashboardNavbar, MatIcon, RouterOutlet, StudentSidebar, AdminSidebar],
  templateUrl: './manage-students.html',
  styleUrl: './manage-students.css'
})
export class ManageStudents {

}
