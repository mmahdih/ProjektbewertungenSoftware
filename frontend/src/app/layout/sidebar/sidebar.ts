import { Component, OnInit } from '@angular/core';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { AuthService } from '../../core/auth/auth.service';
import { SidebarItem } from '../../Shared/interfaces/sidebar-item.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {
  menuItems: SidebarItem[] = [];

  constructor(private auth: AuthService) {}

  ngOnInit() {
    const role = this.auth.getRole();

    this.menuItems = this.getMenuForRole(role);
  }

  getMenuForRole(role: string): SidebarItem[] {
    const menus: { [key: string]: SidebarItem[] } = {
      admin: [
        { icon:'dashboard', label: 'Dashboard', route:'/admin/dashboard' },
        { label:'Lehrer', route:'/admin/teachers' },
        { label:'Schüler', route:'/admin/students' },
      ],
      teacher: [
        { label:'Dashboard', route:'/teacher/dashboard' },
        { label:'My Classes', route:'/teacher/classes' },
      ],
      student: [
        { label:'Dashboard', route:'/student/dashboard' },
        { label:'My Courses', route:'/student/courses' },
      ]
    };

    return menus[role] || [];
  }

}
