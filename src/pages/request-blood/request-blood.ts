import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RequestBloodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-blood',
  templateUrl: 'request-blood.html',
})
export class RequestBloodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  request(event){
    console.log(event);
  }

}
