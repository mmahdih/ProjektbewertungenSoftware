import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { DashboardNavbar } from "../../../layout/dashboard-navbar/dashboard-navbar";
import { Sidebar } from "../../../layout/sidebar/sidebar";

@Component({
  selector: 'app-manage-teachers',
  imports: [MatIconModule],
  templateUrl: './manage-teachers.html',
  styleUrl: './manage-teachers.css'
})
export class ManageTeachers {

}
