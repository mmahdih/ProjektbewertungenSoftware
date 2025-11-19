import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../core/auth/auth.service';

import { SiBeakerIcon } from '@semantic-icons/heroicons/24/solid';
import { SiUserCircleIcon } from '@semantic-icons/heroicons/24/solid';
import { SidebarService } from '../../core/services/sidebar.service';


@Component({
  selector: 'app-dashboard-navbar',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule, SiUserCircleIcon],
  templateUrl: './dashboard-navbar.html',
  styleUrl: './dashboard-navbar.css',
})
export class DashboardNavbar implements OnInit {
  @Output() sidebarToggle = new EventEmitter<void>();
  theme: string = 'dark';
  username: string = '';
  sidebarStatus: string = '';

  constructor(private auth: AuthService, private sidebarService: SidebarService) {}

  onToggleSidebar() {
    // this.sidebarToggle.emit();
    this.sidebarService.toggle();
    this.sidebarStatus = this.sidebarStatus === 'open' ? 'close' : 'open';
  }

  ngOnInit() {
    this.username = this.auth.getUsername();
  }

  changeTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
  }
}
