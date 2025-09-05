import { Component, input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-adminDashboard',
  templateUrl: 'AdminDashboard.html',
  styleUrl: 'AdminDashboard.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line

})
export class adminDashboard {
  darkMode = true;
  
  constructor() {
    
  }

  darkmode_toggle(): void {
    this.darkMode = !this.darkMode;
    
    // Update class on body for theme switching
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  loadThemePreference(): void {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      this.darkMode = savedTheme === 'dark';
    } else {
      this.darkMode = systemPrefersDark;
    }
    
    // Apply the theme immediately
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

}