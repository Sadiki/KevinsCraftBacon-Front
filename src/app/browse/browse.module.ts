import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    NavbarModule
  ],
  exports: [
    BrowseRoutingModule
  ]
})
export class BrowseModule { }
