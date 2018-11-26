import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaconRoutingModule } from './bacon-routing.module';
import { CraftComponent } from './craft/craft.component';
import { BaconComponent } from './main/bacon.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BaconComponent,
    CraftComponent
  ],
  imports: [
    BaconRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class BaconModule { }
