import { Routes } from '@angular/router';
import { Login } from './Features/Auth/login/login';
import { adminDashboard } from './Features/Admin/admin-dashboard/AdminDashboard';
import { adminExport } from './Features/Admin/admin-export/adminExport';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', component: adminDashboard },
  { path: 'export', component: adminExport },
  { path: "admindashboard", component: Dashboard},
  { path: '', redirectTo: 'login', pathMatch: 'full' } // default
];
