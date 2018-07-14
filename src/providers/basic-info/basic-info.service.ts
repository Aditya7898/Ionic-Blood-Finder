import { Injectable } from '@angular/core';

/*
  Generated class for the BasicInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BasicInfoService {

  bloodGroups = [
    { value: 'A+' },
    { value: 'A-' },
    { value: 'B+' },
    { value: 'B-' },
    { value: 'O+' },
    { value: 'O-' },
    { value: 'AB+'},
    { value: 'AB-'}
  ];

  cities = [
    { value: 'Bhopal' },
    { value: 'Indore' },
    { value: 'Jabalpur'},
    { value: 'Delhi' },
    { value: 'Mumbai'},
    { value: 'Kolkata'},
    { value: 'Jaipur'},
    { value: 'Banglore'}
  ];

  constructor() {
  }

}
