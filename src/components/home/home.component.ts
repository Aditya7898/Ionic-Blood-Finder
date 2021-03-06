import { Component, OnInit } from '@angular/core';
import { BasicInfoService } from '../../providers/basic-info/basic-info.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BloodSearchService } from '../../providers/blood-search/blood-search.service';
import { ModalController, AlertController, NavController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  j = 0;
  requiredDoners: any[] = [];
  Doners: any;

  loader: any;
  isAvilable: boolean = true;
  searchForm: FormGroup;
  cities: any[];
  bloodGroups: any[];

  constructor(private basicDataService: BasicInfoService,
    private searchService: BloodSearchService, private navCtrl: NavController,
    private modal: ModalController, private alertCtrl: AlertController,
    private db: AngularFireDatabase, public loadingCtrl: LoadingController) {
    this.cities = basicDataService.cities;
    this.bloodGroups = basicDataService.bloodGroups;
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'Pbloodgroup': new FormControl(null, [Validators.required]),
      'Pcity': new FormControl(null, [Validators.required]),
    });

    this.searchForm.valueChanges.subscribe(res => {
      this.requiredDoners.length = 0;
      this.onSubmit();
    });
    console.log(this.searchForm.controls.value)
  }

  async onSubmit() {
    // loader
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      spinner: 'bubbles'
    });
    // loader---^^^^
    if (this.searchForm.value.Pcity) {
      await this.db.list('users', ref => ref.orderByChild('City')
        .equalTo(this.searchForm.value.Pcity)).valueChanges().subscribe((res) => {
          this.Doners = res;
          if (res.length > 0) {
            this.j = 0;

            this.loader.present();


            for (let i = 0; i < this.Doners.length; i++) {
              if (this.Doners[i].BloodGroup === this.searchForm.value.Pbloodgroup) {
                this.requiredDoners[this.j] = this.Doners[i];
                this.j++;
              }
            }
            this.loader.dismiss();
            console.log(this.j)
            if (this.j <= 0) {
              this.alert()
            }
          } else {
            this.alert()
          }
        })
    }
  }



  open(data) {
    const myModal = this.modal.create('ModalsPage', { modalData: data });
    myModal.present();
    console.log(data)
  }

  alert() {
    this.alertCtrl.create({
      title: 'User Not found',
      subTitle: 'Data not found for this query.',
      buttons: ['Ok']
    }).present();
  }
}
