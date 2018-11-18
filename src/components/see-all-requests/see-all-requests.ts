import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ModalController, LoadingController } from 'ionic-angular';
import { BasicInfoService } from '../../providers/basic-info/basic-info.service';

/**
 * Generated class for the SeeAllRequestsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'see-all-requests',
  templateUrl: 'see-all-requests.html'
})
export class SeeAllRequestsComponent {

  requestList: any;
  loader: any;

  constructor(private db: AngularFireDatabase, private loading: LoadingController,
    private modal: ModalController, private BasicInfo: BasicInfoService) {
  }

  ngOnInit() {
    // loader
    this.loader = this.loading.create({
      content: 'Please wait',
      spinner: 'bubbles'
    })
    this.loader.present();
    // requestList
    this.requestList = this.db.list('requests', ref => ref.limitToLast(20)).valueChanges();
    console.log(this.requestList);
    this.loader.dismiss();
  }
  open(data) {
    const myModal = this.modal.create('ModalsPage', { request: data });
    myModal.present();
    console.log(data)
  }
}
