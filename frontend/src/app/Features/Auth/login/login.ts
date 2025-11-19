import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { Navbar } from "../../../Shared/Components/navbar/navbar";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, Navbar, RouterOutlet],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm: FormGroup;

  loginError: string = '';
  hasError = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  hideError(){
    this.hasError = false;
  }

  showError(){
    this.hasError = true;
  }

  async onSubmit() {
    if (this.loginForm.invalid) return;

    const { username, password } = this.loginForm.value;

    const success = await this.auth.login(username, password);

    if (!success) {
      this.loginError = "Invalid username or password";
      this.showError()
      return;
    }

    const role = this.auth.getRole();

    if (role === 'admin') this.router.navigate(['/admin/dashboard']);
    else if (role === 'teacher') this.router.navigate(['/teacher/dashboard']);
    else if (role === 'student') this.router.navigate(['/student/dashboard']);
  }
}
