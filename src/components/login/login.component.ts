import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth-service/auth-service.service';

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

  result: any
  loginForm: FormGroup;
  //EventEmitter
  @Output() loginResponse: EventEmitter<any>;

  constructor(private auth: AuthService) {
    this.loginResponse = new EventEmitter<any>();
  }

  ngOnInit(){
      this.loginForm = new FormGroup({
        'Email': new FormControl(null, [Validators.required]),
        'Password': new FormControl(null, [Validators.required])
      });
      console.log(this.loginForm);
  }


  async login(){
    this.result = await this.auth.Login(this.loginForm);
    console.log(this.result);
    this.loginResponse.emit(this.result); 
}

}
