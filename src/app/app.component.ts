import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template:`
  <div >
    <h1>{{title}}</h1> 
    
      <h2 *ngFor = "let x of heroList">
        {{x}}
      </h2>

      <app-input [lovely]="lovelyMessage" (newName) = 'addToArray($event)'> </app-input>
  </div>
  `
})

// Get user input and add it into the heroes array;

export class AppComponent {
  lovelyMessage = "You are beatiful"
  title = 'Fallen Heroes';
  heroList = ['Bruce Wayne', ' Jimmy Carter ', ' Jimmy Nuetron '];
  myHero = this.heroList[0];

  addToArray(name){
    this.heroList.push(name);
  }

}


