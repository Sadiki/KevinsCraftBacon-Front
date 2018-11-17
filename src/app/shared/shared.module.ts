import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BaconizePipe } from './pipes/baconize.pipe';

@NgModule({
  declarations: [
    BaconizePipe,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    BaconizePipe,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
