import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../providers/auth-service/auth-service.service';
import { MapPage } from '../pages/map/map';
// import { OneSignal } from '@ionic-native/onesignal';

import { tap } from 'rxjs/operators';
import { FcmProvider } from '../providers/fcm/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  constructor(public platform: Platform,
    public fcm: FcmProvider, private toastCtrl: ToastController, 
    public statusBar: StatusBar, public splashScreen: SplashScreen,
    private afuth: AngularFireAuth, public events: Events,
    private authService: AuthService) {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.fcm.getToken().then((res:any) => {
        const respo = res;
        this.toastCtrl.create({
          message: respo,
          duration: 3000
        }).present();
      }).catch((error)=>{
        this.toastCtrl.create({
          message: ` Error: hai-${error}`,
          duration: 10000
        }).present();
      })
      this.fcm.listenToNotification().pipe(tap(msg => {
        
        const toast = this.toastCtrl.create({
          message: msg.body,
          duration: 3000
        });
        toast.present();
      })
     ).subscribe()
      
      this.statusBar.backgroundColorByHexString("#800000")
      this.splashScreen.hide();

      // this.oneSignal.startInit('8a841d97-8768-4409-af3c-5ebbedc03527', '114764460531');

      // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      // this.oneSignal.handleNotificationReceived().subscribe(() => {
      //   // do something when notification is received
      // });

      // this.oneSignal.handleNotificationOpened().subscribe(() => {
      //   // do something when a notification is opened
      // });

      // this.oneSignal.endInit();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }
  map() {
    this.nav.setRoot(MapPage)
  }
  logout(page) {
    this.nav.setRoot(page);
    this.afuth.auth.signOut();
  }
}
