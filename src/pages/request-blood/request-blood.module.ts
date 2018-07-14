import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestBloodPage } from './request-blood';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RequestBloodPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestBloodPage),
    ComponentsModule
  ],
})
export class RequestBloodPageModule {}
