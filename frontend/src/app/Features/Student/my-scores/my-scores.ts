import { Component } from '@angular/core';
import { DashboardNavbar } from "../../../Shared/Components/dashboard-navbar/dashboard-navbar";
import { StudentSidebar } from "../student-sidebar/student-sidebar";
import { MatIcon } from "@angular/material/icon";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-my-scores',
  imports: [DashboardNavbar, StudentSidebar, MatIcon, RouterOutlet],
  templateUrl: './my-scores.html',
  styleUrl: './my-scores.css'
})
export class MyScores {

}
