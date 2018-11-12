import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes=[
  { path: 'shoppingCart', component: CartComponent },
  { path: 'confirm', component:ConfirmationComponent} ,
  { path: 'payment', component:PaymentComponent },
  { path: 'account', component:ProfileComponent },
  { path: 'wishlist', component:WishlistComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
