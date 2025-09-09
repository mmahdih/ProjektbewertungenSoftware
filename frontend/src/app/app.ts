import { Component, input } from '@angular/core';
import {User} from './user'
import { Login } from './login/login';
import { selbstfremd } from './selbstfremdbewertung/selbstfremd';
import { ReactiveFormsModule } from '@angular/forms'; // Make sure this is imported
import { adminDashboard } from './Admin Dashboard/AdminDashboard';



@Component({
  selector: 'app-root',
  template: `
    <!-- <app-login/> -->
    <!-- <app-adminDashboard/> -->
    <app-selbstfremd/>
  `,
  styles: [
    `
    `,
  ],
  imports: [Login, adminDashboard, selbstfremd],
})
export class App {

}
