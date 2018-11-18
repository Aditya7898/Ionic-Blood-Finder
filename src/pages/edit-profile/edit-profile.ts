import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { BasicInfoService } from '../../providers/basic-info/basic-info.service';
import { AuthService } from '../../providers/auth-service/auth-service.service';


/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage implements OnInit{

  cities: any[];
  bloodGroups: any[];
  editForm: FormGroup;
  profile: any;
  loader: any;

  constructor(public basicService: BasicInfoService,private auth: AuthService, private alertCtrl: AlertController,
              private navCtrl: NavController, private lodingCtrl: LoadingController,private navParams: NavParams) {
    this.cities = basicService.cities;
    this.bloodGroups =  basicService.bloodGroups;
  
  }

   ngOnInit(){
      this.loader = this.lodingCtrl.create({
          content: 'please wait',
         spinner: 'dots'
      });
      this.loader.present();

      this.profile = this.navParams.get('UserProfile');
      console.log(this.profile);
      this.loader.dismiss();

    this.editForm = new FormGroup({
      'Name': new FormControl(this.profile.Name, [Validators.required]),
      'Email': new FormControl(this.profile.Email, [Validators.required]),
      'Phone': new FormControl(this.profile.Phone, [Validators.required]),
      'City': new FormControl(this.profile.City, [Validators.required]),
      'BloodGroup': new FormControl(this.profile.BloodGroup, [Validators.required]),
    });

  }

  Edit(){
    this.loader = this.lodingCtrl.create({
      content: 'please wait',
      spinner: 'bubbles'
    });
    this.loader.present();

    console.log("editform called")
    this.auth.user$.subscribe((user: firebase.User) => {
       this.auth.saveProfile(user, this.editForm)
       .then((res) => {
        this.alertCtrl.create({
          title: 'Profile Updated',
          message: 'Your profile has been updated successfully..',
          buttons: ['OK']
         }).present();
         this.navCtrl.pop();
       }).catch((error) => {
         this.alertCtrl.create({
          message: error,
          buttons: ['OK']
         }).present();
       });
     });
     this.loader.dismiss();
  }

}
