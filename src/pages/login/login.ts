import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  }

  login(event: any){
    if (event.user) {
      const alert = this.alertCtrl.create({
        title: 'Congratulations',
        subTitle: 'You Are Logged In Successfully..',
        buttons: ['Ok']
      });
      alert.present();
      this.navCtrl.setRoot('HomePage');
    } else {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: event.message,
        buttons: ['Ok']
      });
      alert.present();
    }
  }

}
