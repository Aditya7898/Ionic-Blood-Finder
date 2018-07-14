import { Component } from '@angular/core';

/**
 * Generated class for the AboutUsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'about-us',
  templateUrl: 'about-us.html'
})
export class AboutUsComponent {

  text: string;

  constructor() {
    console.log('Hello AboutUsComponent Component');
    this.text = 'Hello World';
  }

}
