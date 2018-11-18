import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { AlertController, Events } from 'ionic-angular';
import { Observable } from 'rxjs';

/*
  Generated class for the BasicInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export enum ConnectionStatusEnum {
  Online,
  Offline
 }

@Injectable()
export class BasicInfoService {


  previousStatus: ConnectionStatusEnum;
  disconnectSubscription: Observable<any>;

  bloodGroups = [
    { value: 'A+' },
    { value: 'A-' },
    { value: 'B+' },
    { value: 'B-' },
    { value: 'O+' },
    { value: 'O-' },
    { value: 'AB+'},
    { value: 'AB-'}
  ];

  cities = [
    { value: 'Bhopal' },
    { value: 'Indore' },
    { value: 'Jabalpur'},
    { value: 'Delhi' },
    { value: 'Mumbai'},
    { value: 'Kolkata'},
    { value: 'Jaipur'},
    { value: 'Banglore'}
  ];

  constructor(private network: Network, private alert: AlertController,
    public eventCtrl: Events) {
      this.previousStatus = ConnectionStatusEnum.Online;
  }
  
  public initializeNetworkEvents(): void {
    this.network.onDisconnect().subscribe(() => {
        if (this.previousStatus === ConnectionStatusEnum.Online) {
            this.eventCtrl.publish('network:offline');
        }
        this.previousStatus = ConnectionStatusEnum.Offline;
    });
    this.network.onConnect().subscribe(() => {
        if (this.previousStatus === ConnectionStatusEnum.Offline) {
            this.eventCtrl.publish('network:online');
        }
        this.previousStatus = ConnectionStatusEnum.Online;
    });
  }
}
