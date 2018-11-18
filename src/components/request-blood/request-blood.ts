import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BloodSearchService } from '../../providers/blood-search/blood-search.service';
import { BasicInfoService } from '../../providers/basic-info/basic-info.service';
import { AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service.service';

/**
 * Generated class for the RequestBloodComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'request-blood',
  templateUrl: 'request-blood.html'
})
export class RequestBloodComponent implements OnInit{

  isAbleToRequest = false;
  
  bloodGroups: { value: string; }[];
  cities: { value: string; }[];
  requestForm: FormGroup;

  @Output() requestResponse: EventEmitter<any>;

  constructor(private bloodService: BloodSearchService, private auth: AuthService,
     private info: BasicInfoService, private alerCtrl: AlertController) {
    this.cities = info.cities;
    this.bloodGroups = info.bloodGroups;
    this.requestResponse = new EventEmitter<any>();
  }
  

  ngOnInit(){
    this.auth.user$.subscribe((user) => {
      if(user) {
        this.isAbleToRequest = true;
      }
    });

    this.requestForm = new FormGroup({
      'Pname': new FormControl( null, Validators.required),
      'Pbloodgroup': new FormControl(null, [Validators.required]),
      'Pcity': new FormControl(null, [Validators.required]),
      'Pdoctor': new FormControl(null, Validators.required),
      'Address': new FormControl(null, [Validators.required, Validators.minLength(6)]), // hospital address
       //
       'Cname': new FormControl( null, Validators.required),
       'Ccontact': new FormControl(null, [Validators.required]),
       'Cemail': new FormControl(null, [Validators.required, Validators.email]),
       'Cdate': new FormControl(null, Validators.required),
    });
  }

  request(){
    console.log(this.requestForm)
   this.bloodService.request(this.requestForm).then(res => {

    this.requestResponse.emit(res);
    
    this.alerCtrl.create({
      title:'Congratulations.',
      subTitle:'your request is send successfully..',
      buttons:['Ok']
    }).present();
    this.requestForm.reset();
  });
  }
}
