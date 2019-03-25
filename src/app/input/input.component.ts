import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  template : `
    <input #input placeholder="Forgotten Soliders" (keyup.enter)="onEnter(input.value)">
    `
})

export class InputComponent  {
  @Input() lovely: String;
  @Output() newName = new EventEmitter();


  values = '';
  onEnter(values: any){
    this.values = values;
    this.newName.emit(values);
  }
}
