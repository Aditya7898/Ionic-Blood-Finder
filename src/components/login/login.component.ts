import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth-service/auth-service.service';
import { LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{

  loader: any;
  result: any
  loginForm: FormGroup;
  //EventEmitter
  @Output() loginResponse: EventEmitter<any>;

  constructor(private auth: AuthService,private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {
    this.loginResponse = new EventEmitter<any>();
  
    this.loader = this.loadingCtrl.create({
      content: 'please wait.',
      spinner: 'bubbles'
    });
  }

  ngOnInit(){
      this.loginForm = new FormGroup({
        'Email': new FormControl(null, [Validators.required, Validators.minLength(6)]),
        'Password': new FormControl(null, [Validators.required])
      });
      console.log(this.loginForm);
  }


  async login(){
    this.loader.present();
    this.result = await this.auth.Login(this.loginForm);
    console.log(this.result);
    this.loginResponse.emit(this.result); 
    this.loader.dismiss();
  }

  forgot(){
    this.auth.forgotPassword(this.loginForm.value.Email)
    .then((res) =>{
      console.log(res)
      this.toast("Password reset link sent successfully to your email.")
   })
    .catch((error) => {
       this.toast(error);
    });
  }

  toast(message){
    this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'bottom'
    }).present();
  }

}
