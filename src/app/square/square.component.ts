import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
   
      <button>{{ value }}</button>
   
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; background: none;  }']
})
export class SquareComponent {
  //this is a UI component (aka dumb component) because it's not 
  // modifying its state - all it does is receive data via its
  // input properties
  @Input() value!: 'X' | 'O';
}
