import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './payment/payment.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent, ProfileDialogComponent, PaymentDialogComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  entryComponents: [ ProfileDialogComponent, PaymentDialogComponent],
  declarations: [
    CartComponent,
    ConfirmationComponent,
    PaymentComponent,
    WishlistComponent,
    ProfileComponent,
    ProfileDialogComponent,
    PaymentDialogComponent
    
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    MatDialogModule
  ]
})
export class ProfileModule { }
