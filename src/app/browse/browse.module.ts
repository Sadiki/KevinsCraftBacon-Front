import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    SharedModule
  ]
})
export class BrowseModule { }
