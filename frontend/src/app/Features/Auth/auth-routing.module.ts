import { Routes } from "@angular/router";
import { Login } from './login/login';
import { Loginn } from "./loginn/loginn";


export const AuthRoutes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'loginn',
    component: Loginn,
  }
];
