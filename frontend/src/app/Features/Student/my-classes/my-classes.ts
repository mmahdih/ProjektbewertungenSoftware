import { Component } from '@angular/core';
import { Sidebar } from "../../../layout/sidebar/sidebar";
import { DashboardNavbar } from "../../../Shared/Components/dashboard-navbar/dashboard-navbar";

@Component({
  selector: 'app-my-classes',
  imports: [Sidebar, DashboardNavbar],
  templateUrl: './my-classes.html',
  styleUrl: './my-classes.css'
})
export class MyClasses {

}
