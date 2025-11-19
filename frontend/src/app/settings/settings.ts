import { Component } from '@angular/core';
import { DashboardNavbar } from "../layout/dashboard-navbar/dashboard-navbar";
import { MatIcon } from "@angular/material/icon";
import { RouterOutlet } from "@angular/router";
import { Sidebar } from "../layout/sidebar/sidebar";

@Component({
  selector: 'app-settings',
  imports: [DashboardNavbar, MatIcon, RouterOutlet, Sidebar],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {

}
