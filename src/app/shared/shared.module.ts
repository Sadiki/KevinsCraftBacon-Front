import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaconizePipe } from './pipes/baconize.pipe';

@NgModule({
  declarations: [
    BaconizePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaconizePipe,
  ]
})
export class SharedModule { }
