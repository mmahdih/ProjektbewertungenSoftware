import { Component } from '@angular/core';
import { Sidebar } from "../../../layout/sidebar/sidebar";
import { MatIcon } from "@angular/material/icon";
import { DashboardNavbar } from "../../../layout/dashboard-navbar/dashboard-navbar";
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Student {
id: string;
firstName: string;
lastName: string;
email: string;
date: string;
} 
@Component({
  selector: 'app-my-classes',
  imports: [Sidebar, MatIcon, DashboardNavbar],
  templateUrl: './my-classes.html',
  styleUrl: './my-classes.css'
})
export class MyClasses implements OnInit{

  students: Student[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  this.http.get<Student[]>('http://localhost:4100/api/users')
    .subscribe(data => {
      this.students = data;
    });
}
    

  }

