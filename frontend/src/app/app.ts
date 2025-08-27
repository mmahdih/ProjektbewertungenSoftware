import { Component } from '@angular/core';



@Component({
  selector: 'app-user',
  template: `
    Hello to {{ username }}
  `,
  imports: [User]
})


export class User {
  username = 'mahdi';
}


@Component({
  selector: 'app-root',
  template: `
    Is server running? 
    @if (isServerRunning){
      <span> Yes it is </span>
      } @else {    
        <span> No it is not </span>
    }



    @for (user of users; track user.id){
      <p>{{ user.name }}</p>
    }
  `,
  styles: [`
    :host {
      color: #a144eb;
    }
  `],
  imports: [User],
})


export class App {
  isServerRunning = false;
  users = [
    {
      id: 1,
      name : "Mahdi"
    },
    {
      id : 2,
      name : "Sebi"
    },
    {
      id : 3,
      name : "Gebi"
    }
  ]
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
