import { Component, input } from '@angular/core';
import {User} from './user'
import { Login } from './Features/Auth/login/login';
import { ReactiveFormsModule } from '@angular/forms'; // Make sure this is imported
import { adminDashboard } from './Features/Admin/admin-dashboard/AdminDashboard';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: "./app.html",
  styleUrl: './app.css',
  // template: `
  //   <!-- <app-login/> -->
  //    <app-navbar></app-navbar>
  //   <router-outlet></router-outlet>
  // `,
  // styles: [
  //   `
  //   `,
  // ],
  imports: [RouterOutlet, Navbar],
})
export class App {

}
