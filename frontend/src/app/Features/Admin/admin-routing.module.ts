import { Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { ManageStudents } from './manage-students/manage-students';
import { ManageTeachers } from './manage-teachers/manage-teachers';
import { Export } from './admin-export/admin-export';
import { Import } from './admin-import/admin-import';
import { ManageClasses } from './manage-classes/manage-classes';
import { ManageQuestions } from './manage-questions/manage-question';
import { ManageAdmins } from "./manage-admin/manage-admin";


export const AdminRoutes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboard,
  },
  {
    path: 'manage-admin',
    component: ManageAdmins,
  },
  {
    path: 'manage-students',
    component: ManageStudents,
  },
  {
    path: 'manage-teachers',
    component: ManageTeachers,
  },
  {
    path: 'manage-classes',
    component: ManageClasses,
  },
  {
    path: 'manage-questions',
    component: ManageQuestions,
  },
  {
    path: 'export',
    component: Export,
  },
  {
    path: 'import',
    component: Import,
  },
];