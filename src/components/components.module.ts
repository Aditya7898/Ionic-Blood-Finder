import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us';
import { AboutUsComponent } from './about-us/about-us';
import { GuidelinesComponent } from './guidelines/guidelines';
import { SeeAllRequestsComponent } from './see-all-requests/see-all-requests';
import { RequestBloodComponent } from './request-blood/request-blood';
import { HomeComponent } from './home/home.component';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [
    LoginComponent,
    SignUpComponent,
    ContactUsComponent,
    AboutUsComponent,
    GuidelinesComponent,
    SeeAllRequestsComponent,
    RequestBloodComponent,
    HomeComponent
    ],

    imports: [IonicModule],

	exports: [
    LoginComponent,
    SignUpComponent,
    ContactUsComponent,
    AboutUsComponent,
    GuidelinesComponent,
    SeeAllRequestsComponent,
    RequestBloodComponent,
    HomeComponent
   ]
})
export class ComponentsModule {}
