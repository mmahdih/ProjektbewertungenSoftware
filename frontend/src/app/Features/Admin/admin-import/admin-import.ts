import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { DashboardNavbar } from '../../../layout/dashboard-navbar/dashboard-navbar';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../../layout/sidebar/sidebar';

// ⬇️ NEU: TranslationService einbinden
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    DashboardNavbar,
    Sidebar,
  ],
  templateUrl: './admin-import.html',
  styleUrl: './admin-import.css',
})
export class Import {
  constructor(public i18n: TranslationService) {}

  // Helper für das Template
  t(key: string): string {
    return this.i18n.t(key);
  }

  // optional: Sprache umschalten (für Buttons im Template)
  switchLang(lang: 'de' | 'en') {
    this.i18n.setLang(lang);
  }

  // optional: aktuelle Sprache im Template anzeigen
  get currentLang(): 'de' | 'en' {
    return this.i18n.getLang();
  }
}
