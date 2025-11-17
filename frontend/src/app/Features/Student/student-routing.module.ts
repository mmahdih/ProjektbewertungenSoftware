import { Component, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { StudentDashboard } from './student-dashboard/student-dashboard';
import { MyProfile } from './my-profile/my-profile';
import { MyScores } from './my-scores/my-scores';


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
    path: 'my-scores',
    component: MyScores
  }
];
