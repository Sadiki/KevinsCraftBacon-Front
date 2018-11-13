import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaconRoutingModule } from './bacon-routing.module';
import { BaconComponent } from './main/bacon.component';


@NgModule({
  declarations: [
    BaconComponent
  ],
  imports: [
    CommonModule,
    BaconRoutingModule
  ]
})
export class BaconModule { }
