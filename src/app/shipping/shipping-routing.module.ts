import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { ShippingComponent } from './shipping.component';

const routes: Routes = [
  { path: '', component: ShippingComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingRoutingModule { }
