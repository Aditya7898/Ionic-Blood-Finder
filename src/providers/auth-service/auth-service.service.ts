import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
/*
  Generated class for the AuthServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService {

  LoggingUser$: Observable<{}>;
  currentUser: any;
  LoggedInUserInfo:any;
  user$: Observable<firebase.User>;
  signUpResponse: any;
  loginResponse: any;
  constructor(private db: AngularFireDatabase, 
              private afuth: AngularFireAuth) {
  

    this.user$ = afuth.authState;
    this.user$.subscribe(user => {
      if (user) {
        this.LoggingUser$ = this.db.object('/users/'+ user.uid).valueChanges();
        this.LoggingUser$.subscribe(response => {
                this.LoggedInUserInfo = response;
                 console.log(response);
        });
      }
    });
  }


  // User info by user id
// async getUser(){
//   await this.user$.subscribe(user => {
//     if (user) {
//       this.LoggingUser$ = this.db.object('/users/'+ user.uid).valueChanges();
//       this.LoggingUser$.subscribe(response => {
//               this.LoggedInUserInfo = response;
//                console.log(response);
//       });
//     }
//   });
//   return this.LoggedInUserInfo;
// }
  // SignUp
  async signUp(userData: FormGroup) {
   await this.afuth.auth.createUserWithEmailAndPassword(userData.value.Email, userData.value.Password)
    .then(response => {
      if (response) {
        this.user$.subscribe((user)=>{
          if(user){
            this.saveProfile(user, userData);
          }
        })
        this.signUpResponse = response;
      }
    })
    .catch(error => {
      this.signUpResponse = error;
      console.log(error);
    });
    console.log(this.signUpResponse);
    return this.signUpResponse;
  }

  // Login
  async Login(loginData: FormGroup){
      await this.afuth.auth.signInWithEmailAndPassword(loginData.value.Email, loginData.value.Password)
                   .then(response => {
                     if(response){
                       this.loginResponse = response;
                     }
                   })
                   .catch(error => {
                    this.loginResponse = error;
                    console.log(error);
                  });
                  console.log(this.loginResponse);
            return this.loginResponse;
  }

  // saveProfile
 saveProfile(user: firebase.User,userData: FormGroup){
     this.db.object('/users/' + user.uid).update({
      Name: userData.value.Name,
      BloodGroup: userData.value.BloodGroup,
      Phone: userData.value.Contact,
      Email: userData.value.Email,
      City: userData.value.City,
     });
  }
}
