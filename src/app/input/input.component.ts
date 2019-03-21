import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  template : `
    <input #input placeholder="Forgotten Soliders" (keyup.enter)="onEnter(input.value)">
    <h2>{{lovely}}</h2>
    `
})

export class InputComponent  {
  @Input() lovely: String;

  values = '';
  onEnter(values: any){
    this.values = values;
  }
}
