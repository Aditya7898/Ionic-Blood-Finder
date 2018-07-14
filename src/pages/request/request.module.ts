import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestPage } from './request';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RequestPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestPage),
    ComponentsModule
  ],
})
export class RequestPageModule {}
