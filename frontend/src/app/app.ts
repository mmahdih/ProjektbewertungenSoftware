import { Component, input } from '@angular/core';
import {User} from './user'
import { Login } from './login/login';
import { ReactiveFormsModule } from '@angular/forms'; // Make sure this is imported
import { adminDashboard } from './Admin Dashboard/AdminDashboard';



@Component({
  selector: 'app-root',
  template: `
    <!-- <app-login/> -->
    <app-adminDashboard/>
  `,
  styles: [
    `
    `,
  ],
  imports: [Login, adminDashboard],
})
export class App {

}
