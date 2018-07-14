import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeeAllRequestPage } from './see-all-request';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SeeAllRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(SeeAllRequestPage),
    ComponentsModule
  ],
})
export class SeeAllRequestPageModule {}
