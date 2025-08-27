import { Component, input } from '@angular/core';


@Component({
  selector: 'app-user',
  template: ` <p>The user's name is {{ name() }}</p> `,
  imports: [User],
})
export class User {
  username = 'mahdi';
  name = input<string>();
}