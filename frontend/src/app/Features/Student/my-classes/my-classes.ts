import { Component } from '@angular/core';
import { Sidebar } from "../../../layout/sidebar/sidebar";
import { MatIcon } from "@angular/material/icon";
import { DashboardNavbar } from "../../../layout/dashboard-navbar/dashboard-navbar";
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../core/services/user';

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

  // students : Student[]=[
  //   { id: 0, firstName: 'Max' ,lastName :'Mustermann',email:'test@email.com'},
  //   { id: 1, firstName: 'Reiner' ,lastName :'Zufall',email:'test@email.de'},
  //   { id: 2, firstName: 'Peter' ,lastName :'Silie',email:'123@email.com'},
  //   { id: 3, firstName: 'Tim' ,lastName :'Buktu',email:'email@email.com'},
  //   { id: 4, firstName: 'Anna' ,lastName :'Log',email:'e@mail.txt'},
  //   { id: 5, firstName: 'Mona' ,lastName :'Lisa',email:'mona@lisa.koop'},
  // ];
  students: Student[] = [];

  constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.http.get<any[]>('http://localhost:4100/api/users')
  //     .subscribe({
  //       next: (data) => this.students = data,
  //       error: (err) => console.error('API Fehler:', err)
  //     });
  // }
  ngOnInit(): void {
  this.http.get<Student[]>('http://localhost:4100/api/users')
    .subscribe(data => {
      this.students = data;
    });
}
    

  }

