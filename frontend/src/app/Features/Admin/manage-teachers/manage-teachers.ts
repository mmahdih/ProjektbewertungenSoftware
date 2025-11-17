import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { Sidebar } from "../../../Shared/Components/sidebar/sidebar";
import { DashboardNavbar } from "../../../Shared/Components/dashboard-navbar/dashboard-navbar";

@Component({
  selector: 'app-manage-teachers',
  imports: [RouterOutlet, MatIcon, Sidebar, DashboardNavbar],
  templateUrl: './manage-teachers.html',
  styleUrl: './manage-teachers.css'
})
export class ManageTeachers {

}
