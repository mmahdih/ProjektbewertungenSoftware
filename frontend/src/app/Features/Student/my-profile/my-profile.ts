import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { StudentSidebar } from "../student-sidebar/student-sidebar";
import { DashboardNavbar } from "../../../Shared/Components/dashboard-navbar/dashboard-navbar";

@Component({
  selector: 'app-my-profile',
  imports: [RouterOutlet, MatIcon, StudentSidebar, DashboardNavbar],
  templateUrl: './my-profile.html',
  styleUrl: './my-profile.css'
})
export class MyProfile {

}
