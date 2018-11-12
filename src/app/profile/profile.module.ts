import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    CartComponent,
    ConfirmationComponent,
    OrdersComponent,
    PaymentComponent,
    WishlistComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NavbarModule
  ],
  exports: [
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
