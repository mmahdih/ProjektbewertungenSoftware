import { Component, OnInit } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-projects',
  imports: [MatIcon],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {
  showNewModel: boolean = false;
ngOnInit(): void {
  
}

openNewModel(): void {
  this.showNewModel = true;
}
closeNewModel(): void {
  this.showNewModel = false;
}

}
