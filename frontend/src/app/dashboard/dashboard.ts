import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Sidebar } from "../sidebar/sidebar";
import { DashboardNavbar } from "../dashboard-navbar/dashboard-navbar";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatInputModule, Sidebar, DashboardNavbar, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
}
