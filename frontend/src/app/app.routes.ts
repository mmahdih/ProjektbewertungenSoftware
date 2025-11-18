import { Routes } from '@angular/router';

export const routes: Routes = [

  
  { path: 'admin', loadChildren: () => 
    import('./Features/Admin/admin-routing.module')
    .then(m => m.AdminRoutes), title: 'Admin' },

  { path: 'auth', loadChildren: () => 
    import('./Features/Auth/auth-routing.module')
    .then(m => m.AuthRoutes), title: 'Auth'  },

  { path: 'student', loadChildren: () => 
    import('./Features/Student/student-routing.module')
    .then(m => m.StudentRoutes), title: 'Student'  },
    
  { path: 'teacher', loadChildren: () => 
    import('./Features/Teacher/teacher-routing.module')
    .then(m => m.TeacherRoutes), title: 'Teacher'  },
    
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' } // default
];
