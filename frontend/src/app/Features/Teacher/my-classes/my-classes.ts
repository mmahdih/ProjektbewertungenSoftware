import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { TeacherSidebar } from "../teacher-sidebar/teacher-sidebar";
import { DashboardNavbar } from "../../../Shared/Components/dashboard-navbar/dashboard-navbar";

@Component({
  selector: 'app-my-classes',
  imports: [RouterOutlet, MatIcon, TeacherSidebar, DashboardNavbar],
  templateUrl: './my-classes.html',
  styleUrl: './my-classes.css'
})
export class MyClasses {

}
