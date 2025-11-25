import { Component } from '@angular/core';
import { Sidebar } from "../../../layout/sidebar/sidebar";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-my-classes',
  imports: [Sidebar, MatIcon],
  templateUrl: './my-classes.html',
  styleUrl: './my-classes.css'
})
export class MyClasses {

}
