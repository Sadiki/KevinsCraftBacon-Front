import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


import { BaconizePipe } from './pipes/baconize.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule, MatSnackBarModule } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';

@NgModule({
  declarations: [
    BaconizePipe,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  exports: [
    BaconizePipe,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSnackBarModule

  ],
  providers: [ProfileComponent]
  
})
export class SharedModule { }
