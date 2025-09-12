import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.html',
  styleUrls: ['login.css'], // Use styleUrls instead of styleUrl for multiple files
  imports: [ReactiveFormsModule]
})
export class Login {

  loginForm!: FormGroup; // Declare the property

  constructor(private fb: FormBuilder){
    // Initialize the form in the constructor
    this.loginForm = this.fb.group({
      username : ['', [Validators.required]],
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
