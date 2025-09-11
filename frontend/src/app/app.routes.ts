import { Routes } from '@angular/router';
import { Login } from './login/login';
import { adminDashboard } from './Admin Dashboard/AdminDashboard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', component: adminDashboard },
  { path: '', redirectTo: 'login', pathMatch: 'full' } // default
];
