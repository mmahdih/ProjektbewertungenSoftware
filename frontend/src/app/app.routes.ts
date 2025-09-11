import { Routes } from '@angular/router';
import { Login } from './Features/Auth/login/login';
import { adminDashboard } from './Features/Admin/admin-dashboard/AdminDashboard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', component: adminDashboard },
  { path: '', redirectTo: 'login', pathMatch: 'full' } // default
];
