import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-dashboard-navbar',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './dashboard-navbar.html',
  styleUrl: './dashboard-navbar.css'
})
export class DashboardNavbar {
  theme : string = "dark"

  changeTheme() {
  this.theme = this.theme === 'light' ? 'dark' : 'light';
}
}
