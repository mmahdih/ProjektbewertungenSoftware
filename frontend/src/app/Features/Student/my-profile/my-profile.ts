import { Component } from '@angular/core';
import { Sidebar } from "../../../layout/sidebar/sidebar";
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from "@angular/material/icon";


@Component({
  selector: 'app-my-profile',
  imports: [ MatCardModule, MatListModule, MatIconModule],
  templateUrl: './my-profile.html',
  styleUrl: './my-profile.css'
})
export class MyProfile {

}
