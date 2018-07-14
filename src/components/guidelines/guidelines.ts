import { Component } from '@angular/core';

/**
 * Generated class for the GuidelinesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'guidelines',
  templateUrl: 'guidelines.html'
})
export class GuidelinesComponent {

  text: string;

  constructor() {
    console.log('Hello GuidelinesComponent Component');
    this.text = 'Hello World';
  }

}
