import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { DashboardNavbar } from "../../../layout/dashboard-navbar/dashboard-navbar";
import { Sidebar } from "../../../layout/sidebar/sidebar";

@Component({
  selector: 'app-my-students',
  imports: [RouterOutlet, MatIcon, DashboardNavbar, Sidebar],
  templateUrl: './my-students.html',
  styleUrl: './my-students.css'
})
export class MyStudents {

}
