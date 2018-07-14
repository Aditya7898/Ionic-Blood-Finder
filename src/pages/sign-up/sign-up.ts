import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AuthService } from '../../providers/auth-service/auth-service.service';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, 
    private alertctrl: AlertController, private auth: AuthService) {
  }

  register(event: any) {
    console.log(event);

    if (event.user) {
      const alert = this.alertctrl.create({
        title: 'Congratulations',
        subTitle: 'Your registration is successful..',
        buttons: ['Ok']
      });
      alert.present();
      console.log(event.user);
      this.navCtrl.setRoot('HomePage');
    } else {
      const alert = this.alertctrl.create({
        title: 'Error',
        subTitle: event.message,
        buttons: ['Ok']
      });
      alert.present();
    }
  }

}
