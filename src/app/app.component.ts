import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Get user input and add it into the heroes array;

export class AppComponent {

  title = 'Fallen Heroes';
  heroes = ['Bruce Wayne', ' Jimmy Carter ', ' Jimmy Nuetron '];
}

