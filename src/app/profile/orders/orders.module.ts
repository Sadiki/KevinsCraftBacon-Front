import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { ViewOrderComponent } from './view-order/view-order.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';

@NgModule({
  declarations: [ViewOrderComponent, NewOrderComponent, ConfirmOrderComponent, AllOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
