import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuidelinesPage } from './guidelines';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GuidelinesPage,
  ],
  imports: [
    IonicPageModule.forChild(GuidelinesPage),
    ComponentsModule
  ],
})
export class GuidelinesPageModule {}
