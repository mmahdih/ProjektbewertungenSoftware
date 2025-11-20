import { Component, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { TeacherDashboard } from './teacher-dashboard/teacher-dashboard';
import { MyStudents } from './my-students/my-students';
import { MyClasses } from './my-classes/my-classes';
import { MyProfile } from './my-profile/my-profile';
import { StudentExport } from './student-export/student-export';


export const TeacherRoutes: Routes = [
  {
    path: 'dashboard',
    component: TeacherDashboard,
  },
  {
    path: 'my-profile',
    component: MyProfile
  },
  {
    path: 'my-students',
    component: MyStudents
  },
  {
    path: 'my-classes',
    component: MyClasses
  },
  {
    path: 'export',
    component: StudentExport
  }
];
