import { Component, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
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
