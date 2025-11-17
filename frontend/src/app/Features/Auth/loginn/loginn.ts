import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { Sidebar } from "../../../Shared/Components/sidebar/sidebar";
import { DashboardNavbar } from "../../../Shared/Components/dashboard-navbar/dashboard-navbar";
import { Navbar } from "../../../Shared/Components/navbar/navbar";

@Component({
  selector: 'app-loginn',
  imports: [RouterOutlet, MatIcon, Sidebar, DashboardNavbar, Navbar],
  templateUrl: './loginn.html',
  styleUrl: './loginn.css'
})
export class Loginn {

}
