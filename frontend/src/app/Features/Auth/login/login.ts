import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { DashboardNavbar } from "../../../Shared/Components/dashboard-navbar/dashboard-navbar";
import { Navbar } from "../../../Shared/Components/navbar/navbar";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, MatIcon, Navbar, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login form submitted:', this.loginForm.value);
      // alert(this.loginForm.value.username + "|" + this.loginForm.value.password)
    } else {
      console.log('Form is invalid');
    }
  }
  
  forgotPassword() {
    console.log('Forgot password clicked');
  }
}
