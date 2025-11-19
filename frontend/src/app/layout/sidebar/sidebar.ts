import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
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
  @Input() isCollapsed = false;
  @Output() sidebarClose = new EventEmitter<void>();

  sidebarStatus: string = 'open';
  menuItems: SidebarItem[] = [];

  constructor(
    private auth: AuthService,
    private router: Router,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    const role = this.auth.getRole();
    this.menuItems = this.getMenuForRole(role);

    this.sidebarService.isCollapsed$.subscribe((collapsed) => (this.isCollapsed = collapsed));
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
        { icon: 'group', label: 'Users', route: '/admin/users' },
        { icon: 'dashboard', label: 'Lehrer', route: '/admin/manage-teachers' },
        { icon: 'dashboard', label: 'Schüler', route: '/admin/manage-students' },
        { icon: 'dashboard', label: 'Klassen', route: '/admin/manage-classes' },
        { icon: 'dashboard', label: 'Anfragen', route: '/admin/requests' },
        { icon: 'upload', label: 'Import', route: '/admin/import' },
        { icon: 'download', label: 'Export', route: '/admin/export' },
      ],
      teacher: [
        { icon: 'dashboard', label: 'Dashboard', route: '/teacher/dashboard' },
        {
          icon: 'manage_accounts',
          label: 'Verwaltung',
          route: '',
          subMenu: [
            { icon: 'person', label: 'Schüler', route: '/teacher/my-students' },
            { icon: 'groups', label: 'Groups', route: '/teacher/groups' },
            { icon: 'assignment', label: 'Projekte', route: '/teacher/projects' },
          ],
        },
        { icon: 'video_label', label: 'Meine Klassen', route: '/teacher/my-classes' },
        { icon: 'mode_heat', label: 'Notenverwaltung', route: '/teacher/manage-grades' },
        { icon: 'download', label: 'Export', route: '/teacher/export' },
      ],
      student: [
        { icon: 'dashboard', label:'Dashboard', route:'/student/dashboard' },
        { icon: 'person', label:'Meine Lehrer', route:'/student/my-teachers' },
        { icon: 'group', label:'Meine Klassen', route:'/student/my-classes' },
        { icon: 'numbers', label:'Meine Noten', route:'/student/my-results' },
      ]
    };

    return menus[role] || [];
  }
}
