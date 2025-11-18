import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { AuthService } from '../../../core/auth/auth.service';


@Component({
  selector: 'app-dashboard-navbar',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './dashboard-navbar.html',
  styleUrl: './dashboard-navbar.css'
})
export class DashboardNavbar implements OnInit {
  theme : string = "dark"
  username: string = '';

  constructor(private auth: AuthService){}

  ngOnInit(){
    this.username = this.auth.getUsername();
  }


  changeTheme() {
  this.theme = this.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', this.theme);
}
}
