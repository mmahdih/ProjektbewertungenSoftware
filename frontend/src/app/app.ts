import { Component, input } from '@angular/core';
import {User} from './user'


@Component({
  selector: 'app-root',
  template: `
    Is server running? @if (isServerRunning){
    <span> Yes it is </span>
    } @else {
    <span> No it is not </span>
    }
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>

    <div [contentEditable]="isEditable"></div>

    <app-user name="Mahdi" />

    @for (user of users; track user.id){
    <p>{{ user.name }}</p>
    }
  `,
  styles: [
    `
      :host {
        color: #a144eb;
      }
      div {
        border: 1px;
      }
    `,
  ],
  imports: [User],
})
export class App {
  greet() {
    console.log('Hello, there 👋!');
  }
  message = '';

  showSecretMessage() {
    this.message = 'Way to go 🚀!';
  }

  isServerRunning = false;
  users = [
    {
      id: 1,
      name: 'Mahdi',
    },
    {
      id: 2,
      name: 'Sebi',
    },
    {
      id: 3,
      name: 'Gebi',
    },
  ];
  isEditable = true;
}

// standard code

// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css',
//   template: `
//     Hello
//   `
// })
// export class App {
//   protected readonly title = signal('frontend');
// }
