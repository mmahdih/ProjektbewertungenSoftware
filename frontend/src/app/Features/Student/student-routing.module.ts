import { Routes } from "@angular/router";
import { StudentDashboard } from './student-dashboard/student-dashboard';
import { MyProfile } from './my-profile/my-profile';
import { MyResults } from './my-results/my-results';
import { MyClasses } from './my-classes/my-classes';


export const StudentRoutes: Routes = [
  {
    path: 'dashboard',
    component: StudentDashboard,
  },
  {
    path: 'my-profile',
    component: MyProfile
  },
  {
    path: 'my-results',
    component: MyResults
  },
  {
    path: 'my-classes',
    component: MyClasses
  }
];
