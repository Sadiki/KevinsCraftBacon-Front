import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
// import { AuthenticationModule } from '../authentication/authentication.module';
// import { BrowserModule } from '@angular/platform-browser';
// import { BaconModule } from '../bacon/bacon.module';
// import { ProfileModule } from '../profile/profile.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
