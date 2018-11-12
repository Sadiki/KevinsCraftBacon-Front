import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaconRoutingModule } from './bacon-routing.module';
import { BaconComponent } from './main/bacon.component';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [
    BaconComponent
  ],
  imports: [
    CommonModule,
    BaconRoutingModule,
    NavbarModule
  ],
  exports: [
    BaconRoutingModule
  ]
})
export class BaconModule { }
