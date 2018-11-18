import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { Platform } from 'ionic-angular';

@Injectable()
export class FcmProvider {

  constructor(public firebaseNative: Firebase,
              public afs: AngularFirestore, private platform: Platform) {
  }

  async getToken(){
     let token;
     if(this.platform.is('android')) {
       token = await this.firebaseNative.getToken()
     }

     if(this.platform.is('ios')){
       token = await this.firebaseNative.getToken();
       await this.firebaseNative.grantPermission();
     }

     // is not cordova == web pwa
     if(!this.platform.is('cordova')){

     }
     return this.saveTokenToFirestore(token)
  }
   
  private saveTokenToFirestore(token){
    if(!token) return 0;
    const devicesRef = this.afs.collection('devices')

    const docData = {
      token,
      userId: 'testUser',
    }

    return devicesRef.doc(token).set(docData)
  }

  listenToNotification(){
    return this.firebaseNative.onNotificationOpen()
  }

}
