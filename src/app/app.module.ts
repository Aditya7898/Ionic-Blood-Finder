import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { BasicInfoService } from '../providers/basic-info/basic-info.service';
import { BloodSearchService } from '../providers/blood-search/blood-search.service';
import { AuthService } from '../providers/auth-service/auth-service.service';

import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { MapPage } from '../pages/map/map';
// import { OneSignal } from '@ionic-native/onesignal';
import { Network } from '@ionic-native/network';
import { FcmProvider } from '../providers/fcm/fcm';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase';


@NgModule({
  declarations: [
    MyApp,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage
  ],
  providers: [
    // OneSignal ,

    Geolocation,
    GoogleMaps,
    Network,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BasicInfoService,
    BloodSearchService,
    AuthService,
    FcmProvider,
    Firebase
  ]
})
export class AppModule {}
