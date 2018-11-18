import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us';
import { SeeAllRequestsComponent } from './see-all-requests/see-all-requests';
import { RequestBloodComponent } from './request-blood/request-blood';
import { HomeComponent } from './home/home.component';
import { IonicModule } from 'ionic-angular';
import { SendMessageBoxComponent } from './send-message-box/send-message-box';
@NgModule({
	declarations: [
    LoginComponent,
    SignUpComponent,
    ContactUsComponent,
    SeeAllRequestsComponent,
    RequestBloodComponent,
    HomeComponent,
    SendMessageBoxComponent
    ],

    imports: [IonicModule],

	exports: [
    LoginComponent,
    SignUpComponent,
    ContactUsComponent,
    SeeAllRequestsComponent,
    RequestBloodComponent,
    HomeComponent,
    SendMessageBoxComponent
   ]
})
export class ComponentsModule {}
