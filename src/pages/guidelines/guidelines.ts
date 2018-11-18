import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the GuidelinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guidelines',
  templateUrl: 'guidelines.html',
})
export class GuidelinesPage {

  NonEligible: any[] = [
    'Donors should not suffer from Cardiac arrest, hypertension, kidney alignments, epilepsy or diabetics.',
    'Ladies with a bad miscarriage should avoid donating blood for the next 6 months.',
    'If donor already donated blood or have been treated for malaria within the last three months.',
    'If donor undergone any immunization within the past one month.',
    'If donor consumed alcohol within the last 24 hours.',
    'If you are HIV+.',
    'If donor had a dental work for next 24 hours and wait for one month if donor had a major dental procedure.'
  ]
  Preperation: any[] = [
    'Prepare yourself by having enough fruit juice and water in the night and morning before you donate blood.',
    'Avoid donating blood in empty stomach. Eat three hours before you donate blood. Avoid fatty foods. Eat food which is rich in iron such as whole grains, eggs, and beef, and spinach, leafy vegetables, orange and citrus.',
    'Don’t consume Alcohol or caffeine beverages before donating blood.',
    'Avoid donating blood for 6 months if you had any major surgery.'
   ]
   Postcare: any[] = [
    'Prepare yourself by having enough fruit juice and water in the night and morning before you donate blood.',
    'Avoid donating blood in empty stomach. Eat three hours before you donate blood. Avoid fatty foods. Eat food which is rich in iron such as whole grains, eggs, and beef, and spinach, leafy vegetables, orange and citrus.',
    'Don’t consume Alcohol or caffeine beverages before donating blood.',
    'Avoid donating blood for 6 months if you had any major surgery.'
   ]

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  nonEligible(){
    const myModal = this.modalCtrl.create('ModalsPage', { nonEligible: this.NonEligible });
    myModal.present();
  }
  preperation(){
    const myModal = this.modalCtrl.create('ModalsPage', { preperation: this.Preperation });
    myModal.present();
  }
  postcare(){
    const myModal = this.modalCtrl.create('ModalsPage', { postcare: this.Postcare });
    myModal.present();
  }
  
}
