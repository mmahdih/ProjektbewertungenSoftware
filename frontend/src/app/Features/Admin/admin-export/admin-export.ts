import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [ MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatInputModule],
  templateUrl: './admin-export.html',
  styleUrl: './admin-export.css'
})
export class Export {
}

