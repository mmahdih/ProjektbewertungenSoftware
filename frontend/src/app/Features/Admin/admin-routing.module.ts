import { Routes } from "@angular/router";
import { AdminDashboard } from "./admin-dashboard/admin-dashboard";
import { ManageStudents } from './manage-students/manage-students';
import { ManageTeachers } from './manage-teachers/manage-teachers';
import { Export } from "./admin-export/admin-export";
import { Import } from "./admin-import/admin-import";
import { ManageClasses } from './manage-classes/manage-classes';
import { Requests } from './requests/requests';
import { Test } from './test/test';
import { UserList } from './user-list/user-list';


export const AdminRoutes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboard,
  },
  {
    path: 'users',
    component: UserList
  },
  {
    path: 'manage-students',
    component: ManageStudents
  },
  {
    path: 'manage-teachers',
    component: ManageTeachers
  },
  {
    path: 'manage-classes',
    component: ManageClasses
  },
  {
    path: 'requests',
    component: Requests
  },
  {
    path: 'export',
    component: Export
  },
  {
    path: 'import',
    component: Import
  },
  {
    path: 'test',
    component: Test
  }
];
