import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BasicInfoService } from '../../providers/basic-info/basic-info.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth-service/auth-service.service';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the SignUpComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html'
})
export class SignUpComponent implements OnInit{

  loader: any;
  result: any;
  cities: any[];
  bloodGroups: any[];
  signUpForm: FormGroup;

  // EventEmitter
  @Output() registerResponse: EventEmitter<any>;

  constructor(private basicService: BasicInfoService, private loadingCtrl: LoadingController,
    private authService: AuthService) {
    this.cities = basicService.cities;
    this.bloodGroups =  basicService.bloodGroups;

    // EventEmitter
    this.registerResponse = new EventEmitter<any>();
    // loader
    this.loader = this.loadingCtrl.create({
      content: 'please wait.',
      spinner: 'bubbles'
    });
  }

  ngOnInit(){
    this.signUpForm = new FormGroup({
       'Name': new FormControl(null, [Validators.required]),
       'Email': new FormControl(null, [Validators.required]),
       'Phone': new FormControl(null, [Validators.required]),
       'City': new FormControl(null, [Validators.required]),
       'BloodGroup': new FormControl(null, [Validators.required]),
       'Password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

   async register(){
     console.log(this.signUpForm)
      this.loader.present();
      this.result = await this.authService.signUp(this.signUpForm);
      console.log(this.result);
      this.registerResponse.emit(this.result); 
      this.loader.dismiss()
  }
}
