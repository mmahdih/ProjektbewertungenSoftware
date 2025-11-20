import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../core/auth/auth.service';
import { SidebarItem } from '../../Shared/interfaces/sidebar-item.interface';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarService } from '../../core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, ɵInternalFormsSharedModule, CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  isCollapsed = false;
  // @Input() isCollapsed = true;
  // @Output() sidebarClose = new EventEmitter<void>();

  sidebarStatus: string = 'open';
  menuItems: SidebarItem[] = [];

  constructor(private auth: AuthService, private router: Router, private sidebarService: SidebarService) {}

  ngOnInit() {
    const role = this.auth.getRole();
    this.menuItems = this.getMenuForRole(role);

    this.sidebarService.isCollapsed$.subscribe(
      collapsed => this.isCollapsed = collapsed
    )
  }

  logout() {
    this.auth.logout();
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  getMenuForRole(role: string): SidebarItem[] {
    const menus: { [key: string]: SidebarItem[] } = {
      admin: [
        { icon: 'dashboard', label: 'Dashboard', route: '/admin/dashboard' },
        { icon: 'dashboard', label: 'Lehrer', route: '/admin/manage-teachers' },
        { icon: 'dashboard', label: 'Schüler', route: '/admin/manage-students' },
        { icon: 'dashboard', label: 'Klassen', route: '/admin/manage-classes' },
        { icon: 'dashboard', label: 'Anfragen', route: '/admin/requests' },
        { icon: 'download', label: 'Export', route: '/admin/export' },
      ],
      teacher: [
        { icon: 'dashboard', label: 'Dashboard', route: '/teacher/dashboard' },
        { icon: 'dashboard', label: 'Meine Schüler', route: '/teacher/my-students' },
        { icon: 'dashboard', label: 'Meine Klassen', route: '/teacher/my-classes' },
        { icon: 'dashboard', label: 'Meine Kurse', route: '/teacher/my-courses' },
        { icon: 'download', label: 'Export', route: '/teacher/export' },
      ],
      student: [
        { icon: 'dashboard', label: 'Dashboard', route: '/student/dashboard' },
        { icon: 'dashboard', label: 'Meine Lehrer', route: '/student/my-teachers' },
        { icon: 'dashboard', label: 'Meine Klassen', route: '/student/my-classes' },
        { icon: 'dashboard', label: 'Meine Noten', route: '/student/my-grades' },
      ],
    };

    return menus[role] || [];
  }
}
