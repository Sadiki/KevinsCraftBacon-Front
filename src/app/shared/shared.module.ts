import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { BaconizePipe } from './pipes/baconize.pipe';

@NgModule({
  declarations: [
    BaconizePipe,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaconizePipe,
    NavbarComponent
  ]
})
export class SharedModule { }
