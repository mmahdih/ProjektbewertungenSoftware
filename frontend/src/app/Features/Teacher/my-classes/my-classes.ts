import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { DashboardNavbar } from "../../../layout/dashboard-navbar/dashboard-navbar";
import { Sidebar } from "../../../layout/sidebar/sidebar";

@Component({
  selector: 'app-my-classes',
  imports: [RouterOutlet, MatIcon, DashboardNavbar, Sidebar],
  templateUrl: './my-classes.html',
  styleUrl: './my-classes.css'
})
export class MyClasses {

}
