import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BaconComponent } from './bacon/bacon.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
  { path: '', component:BrowseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'bacon', component: BaconComponent },
  { path: 'shoppingCart', component: CartComponent },
  { path: 'confirm', component:ConfirmationComponent} ,
  { path: 'payment', component:PaymentComponent },
  { path: 'account', component:ProfileComponent },
  { path: 'wishlist', component:WishlistComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
