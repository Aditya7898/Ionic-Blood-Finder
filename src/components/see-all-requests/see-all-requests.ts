import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ModalController } from 'ionic-angular';

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

  constructor(private db: AngularFireDatabase, private modal: ModalController) {
  }

  ngOnInit() {
    this.requestList = this.db.list('requests', ref => ref.limitToLast(20)).valueChanges();
    console.log(this.requestList);
  }
  open(data) {
    const myModal = this.modal.create('ModalsPage', { request: data });
    myModal.present();
    console.log(data)
  }
}
