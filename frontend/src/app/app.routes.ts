import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { StudentGuard } from './core/guards/student.guard';
import { TeacherGuard } from './core/guards/teacher.guard';
import { LoginGuard } from './core/guards/login.guard';
import { Login } from './Features/Auth/login/login';

export const routes: Routes = [

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'admin',
    loadChildren: () =>
      import('./Features/Admin/admin-routing.module')
        .then(m => m.AdminRoutes),
    canMatch: [AuthGuard, AdminGuard]
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./Features/Auth/auth-routing.module')
        .then(m => m.AuthRoutes),
        canMatch: [LoginGuard]
  },

  {
    path: 'student',
    loadChildren: () =>
      import('./Features/Student/student-routing.module')
        .then(m => m.StudentRoutes),
    canMatch: [AuthGuard, StudentGuard]
  },

  {
    path: 'teacher',
    loadChildren: () =>
      import('./Features/Teacher/teacher-routing.module')
        .then(m => m.TeacherRoutes),
    canMatch: [AuthGuard, TeacherGuard]
  },

];
