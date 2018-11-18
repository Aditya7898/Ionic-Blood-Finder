import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
/**
 * Generated class for the ModalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
  providers : [CallNumber, EmailComposer]
})
export class ModalsPage {

  userInfo: any;
  request: any;

     nonEligible: any[];
     preperation: any[];
     postcare:    any[];


  constructor(public navParams: NavParams, private view: ViewController,
              private callNumber: CallNumber, private emailComposer: EmailComposer) {
  }

  ionViewWillLoad(){
    this.userInfo = this.navParams.get('modalData');
    console.log(this.userInfo);

    this.request = this.navParams.get('request');
    console.log(this.request);

    // Guidelines
    this.nonEligible = this.navParams.get('nonEligible');
    console.log(this.nonEligible)
    this.preperation = this.navParams.get('preperation')
    console.log(this.preperation)
    this.postcare = this.navParams.get('postcare')
    console.log(this.postcare)
  }

  call(number){
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }


  sendEmailAsNeedy(emailId: any, bloodGroup:any, name: any){
     let email = {
      to: emailId,
      subject: `Request For BloodGroup ${bloodGroup}`,
      body: `Hello ${name},
                I needed ${bloodGroup} blood. Can you please help me?`,
      isHtml: true
    };

    this.emailComposer.open(email);
  }


  sendEmailAsDoner(emailId: any, bloodGroup:any, name: any){
    let email = {
      to: emailId,
      subject: `Regarding requirement of ${bloodGroup} Blood Group.`,
      body: `Hello ${name},
                I saw your request on BloodFinder App. 
                I can help you.`,
      isHtml: true
    };

    this.emailComposer.open(email);
  }

  closeModal(){
   this.view.dismiss();
  }


  // Guidelines 


}
