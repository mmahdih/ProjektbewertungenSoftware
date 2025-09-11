import { Component, input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-adminDashboard',
  templateUrl: 'AdminDashboard.html',
  styleUrl: 'AdminDashboard.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class adminDashboard {
  darkMode = true;
  showModal = false;
  allSubjectsSelected = false;
    // Test Werte
    classes  = ['12OA31'];
    students = ['Ben', 'Pedro', 'Georg', 'Sebi'];
    subjects = ['Deutsch', 'Englisch', 'Mathe'];

  selection = {
    class: '12OA31',
    scope: 'class' as 'class' | 'students',
    selectedStudents: [] as string[],
    selectedSubjects: [] as string[],
    // -----------------
  };
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
  // Modal and Logic 
  openModal()  { this.showModal = true; }
  closeModal() { this.showModal = false; }

  onToggleStudent(name: string, checked: boolean) {
    const arr = this.selection.selectedStudents;
    if (checked && !arr.includes(name)) arr.push(name);
    if (!checked) this.selection.selectedStudents = arr.filter(s => s !== name);
  }

  onToggleAllSubjects(checked: boolean) {
  this.allSubjectsSelected = checked;
  if (checked) {
    this.selection.selectedSubjects = [...this.subjects];
  } else {
    this.selection.selectedSubjects = [];
  }
}

onToggleSubject(name: string, checked: boolean) {
  if (checked && !this.selection.selectedSubjects.includes(name)) {
    this.selection.selectedSubjects.push(name);
  } else if (!checked) {
    this.selection.selectedSubjects =
      this.selection.selectedSubjects.filter(f => f !== name);
  }

  // Falls manuell alle gewählt, alle Fächer Haken setzen
  this.allSubjectsSelected = this.selection.selectedSubjects.length === this.subjects.length;
}

exportData() {
  const payload = {
    class: this.selection.class || 'Unbenannt', 
    scope: this.selection.scope,
    students:
      this.selection.scope === 'class'
        ? this.students
        : this.selection.selectedStudents,
    subjects: this.selection.selectedSubjects,
  };

  // CSV-Erstellung
  const headers = ['Vorname', 'Nachname', ...payload.subjects];
  const rows: string[][] = [];

  payload.students.forEach((student: string) => {
    rows.push(['', student, ...Array(payload.subjects.length).fill('')]);
  });

  let csvContent = headers.join(';') + '\n';
  rows.forEach(row => {
    csvContent += row.join(';') + '\n';
  });

  // CSV herunterladen
  const blob = new Blob(["\uFEFF" + csvContent], {
    type: 'text/csv;charset=utf-8;'
  });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `${payload.class}.csv`; // Dateiname aus Eingabe
  a.click();

  window.URL.revokeObjectURL(url);
  this.closeModal();
}
}