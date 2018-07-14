import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable()
export class BloodSearchService {

  requestList: AngularFireList<any>;
  searchList: Observable<any[]>;
  Doners: any[];
  requiredDoners: any[] = [];
  j: any;

  constructor(private db: AngularFireDatabase) {
  }
  
  request(data: FormGroup) {
    this.requestList = this.db.list('requests');
    console.log(this.requestList);
    return  this.requestList.push({
        Pbloodgroup: data.value.Pbloodgroup,
        Pcity: data.value.Pcity,
        Pdoctor: data.value.Pdoctor,
        Address: data.value.Address,
        Cname: data.value.Cname,
        Ccontact: data.value.Ccontact,
        Cemail: data.value.Cemail,
        Pname: data.value.Pname,
        Cdate: data.value.Cdate.toString()
      });
    }
  // bloodSearchResults(searchCity, searchBlood) {
  //   console.log(this.requiredDoners);
    
  //     this.searchList = this.db.list('users', ref => ref.orderByChild('BloodGroup')
  //                                     .equalTo(searchBlood))
  //                                     .valueChanges();

      
  //     this.searchList.subscribe(response => {
  //       this.Doners = response;
  //       for ( let i = 0; i < this.Doners.length; i++) {
  //         if (this.Doners[i].City === searchCity) {
  //             this.requiredDoners[this.j] = this.Doners[i];
  //             console.log(this.requiredDoners[this.j]);
  //             this.j++;
  //         }
  //       }
  //       this.j = 0;
  //     });     
  //     return this.requiredDoners;                           
  // }


}
