import { Component, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboard } from "./admin-dashboard/admin-dashboard";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ManageStudents } from './manage-students/manage-students';
import { ManageTeachers } from './manage-teachers/manage-teachers';


export const AdminRoutes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboard,
  },
  {
    path: 'manage-students',
    component: ManageStudents
  },
  {
    path: 'manage-teachers',
    component: ManageTeachers
  }
];
