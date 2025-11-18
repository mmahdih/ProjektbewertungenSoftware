import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Sidebar } from "../../../sidebar/sidebar";
import { DashboardNavbar } from "../../../dashboard-navbar/dashboard-navbar";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatInputModule, Sidebar, DashboardNavbar, RouterOutlet],
  templateUrl: './adminExport.html',
  styleUrl: './adminExport.css'
})
export class adminExport {
}
export class ExportComponent {
  // Beispielwerte – kannst du anpassen
  exportTypeRows: string[][] = [
    ['CSV', 'Excel', 'PDF'],
    ['XML', 'JSON', 'HTML']
  ];

  exportContentRows: string[][] = [
    ['Alle Daten', 'Gefilterte Daten', 'Ausgewählte Zeilen'],
    ['Metadaten', 'Logs', 'Statistik']
  ];

  selectedExportType: string | null = null;
  selectedExportContent: string | null = null;

  selectExportType(type: string): void {
    this.selectedExportType = type;
  }

  selectExportContent(content: string): void {
    this.selectedExportContent = content;
  }
}
