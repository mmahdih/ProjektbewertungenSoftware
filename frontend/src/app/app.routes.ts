import { Routes } from '@angular/router';
import { Login } from './Features/Auth/login/login';
import { Title } from '@angular/platform-browser';

export const routes: Routes = [

  { path: 'admin', loadChildren: () => 
    import('./Features/Admin/admin-routing.module')
    .then(m => m.AdminRoutes), title: 'Admin' },

  { path: 'auth', loadChildren: () => 
    import('./Features/Auth/auth-routing.module')
    .then(m => m.AuthRoutes), title: 'Auth'  },

  { path: 'student', loadChildren: () => 
    import('./Features/Auth/auth-routing.module')
    .then(m => m.AuthRoutes), title: 'Auth'  },
    
  { path: 'teacher', loadChildren: () => 
    import('./Features/Auth/auth-routing.module')
    .then(m => m.AuthRoutes), title: 'Auth'  },
    
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' } // default
];
