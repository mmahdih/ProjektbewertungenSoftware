import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { AuthLayout } from './layout/auth-layout/auth-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'admin/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./Features/Admin/admin-routing.module').then((c) => c.AdminRoutes),
      },
    ],
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'teacher/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'teacher',
        loadChildren: () =>
          import('./Features/Teacher/teacher-routing.module').then((c) => c.TeacherRoutes),
      },
    ],
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'student/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./Features/Student/student-routing.module').then((c) => c.StudentRoutes),
      },
    ],
  },
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
      },
      {
        path: 'auth',
        loadChildren: () => import('./Features/Auth/auth-routing.module').then((c) => c.AuthRoutes),
      },
    ],
  },
];
