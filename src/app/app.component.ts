import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template:`
  <div >
    <h1>{{title}}</h1> 
    
      <h2 *ngFor = "let x of heroList">
        {{x}}
      </h2>
    
  </div>
  `
})

// Get user input and add it into the heroes array;

export class AppComponent {
  title = 'Fallen Heroes';
  heroList = ['Bruce Wayne', ' Jimmy Carter ', ' Jimmy Nuetron '];
  myHero = this.heroList[0];
}


