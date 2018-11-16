import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';

const routes: Routes = [
  { path: '', component: AllOrdersComponent },
  { path: ':id', component: ViewOrderComponent },
  { path: 'new', component: NewOrderComponent },
  { path: 'confirm', component: ConfirmOrderComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
