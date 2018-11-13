import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaconRoutingModule } from './bacon-routing.module';
import { BaconComponent } from './main/bacon.component';
import { CraftComponent } from './craft/craft.component';


@NgModule({
  declarations: [
    BaconComponent,
    CraftComponent
  ],
  imports: [
    CommonModule,
    BaconRoutingModule
  ]
})
export class BaconModule { }
