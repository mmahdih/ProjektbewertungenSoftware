import { Component, input } from '@angular/core';
import {User} from './user'
import { ReactiveFormsModule } from '@angular/forms'; // Make sure this is imported
import { adminDashboard } from './Features/Admin/admin-dashboard/AdminDashboard';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <!-- <app-login/> -->

    <router-outlet></router-outlet>
  `,
  styles: [
    `
    `,
  ],

  imports: [RouterOutlet],
})
export class App {

}
