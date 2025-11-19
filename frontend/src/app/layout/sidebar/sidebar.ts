import { Component, OnInit } from '@angular/core';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { AuthService } from '../../core/auth/auth.service';
import { SidebarItem } from '../../Shared/interfaces/sidebar-item.interface';
import { ɵInternalFormsSharedModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, ɵInternalFormsSharedModule, CommonModule, RouterOutlet, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {

  menuItems: SidebarItem[] = [];  

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    // const role = this.auth.getRole();
    const role = 'student';

    this.menuItems = this.getMenuForRole(role);
  }

  logout(){
    this.auth.logout();
  }


  getMenuForRole(role: string): SidebarItem[] {
    const menus: { [key: string]: SidebarItem[] } = {
      admin: [
        { icon:'dashboard', label: 'Dashboard', route:'/admin/dashboard' },
        { icon: 'dashboard', label:'Lehrer', route:'/admin/teachers' },
        { icon: 'dashboard', label:'Schüler', route:'/admin/students' },
        { icon: 'dashboard', label:'Klassen', route:'/admin/klassen' },
        { icon: 'dashboard', label:'Anfragen', route:'/admin/anfragen' },
      ],
      teacher: [
        { icon: 'dashboard', label:'Dashboard', route:'/teacher/dashboard' },
        { icon: 'dashboard', label:'Meine Schüler', route:'/teacher/my-students' },
        { icon: 'dashboard', label:'Meine Klassen', route:'/teacher/my-classes' },
        { icon: 'dashboard', label:'Meine Kurse', route:'/teacher/my-courses' },
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
