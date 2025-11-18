import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { AdminSidebar } from "../admin-sidebar/admin-sidebar";
import { DashboardNavbar } from "../../../Shared/Components/dashboard-navbar/dashboard-navbar";

@Component({
  selector: 'app-manage-teachers',
  imports: [RouterOutlet, MatIcon, DashboardNavbar, AdminSidebar],
  templateUrl: './manage-teachers.html',
  styleUrl: './manage-teachers.css'
})
export class ManageTeachers {

}
