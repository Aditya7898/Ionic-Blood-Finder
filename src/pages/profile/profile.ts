import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, ViewController, PopoverController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service.service';
import { User } from 'firebase';
import { EditProfilePage } from '../edit-profile/edit-profile';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit, OnDestroy{
  
  userObs$: any;
  loader: Loading;
  profile: any;
  constructor(public loaderCtrl: LoadingController, private navCtrl:NavController,
    private auth: AuthService, public popoverCtrl: PopoverController) {
  }

  ionViewWillLoad() {
  }

  async ngOnInit(){
    this.loader = this.loaderCtrl.create({
      content: 'loading profile',
      spinner: 'bubbles'
    });
    this.loader.present();
      this.userObs$ = this.auth.user$;
      this.userObs$.subscribe((user: User) => {
       this.auth.getProfile(user).subscribe(profile => {
        this.profile = profile;
        this.loader.dismiss()
      })
    });
    console.log(this.profile)
  }

  editProfile(myEvent){
    this.navCtrl.push('EditProfilePage', {UserProfile: this.profile})
  }

  ngOnDestroy(){
    // this.userObs$.unsubscribe();
  }

}
