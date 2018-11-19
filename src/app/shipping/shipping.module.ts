import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';
import { ShippingRoutingModule } from './shipping-routing.module';

// Angular Google Maps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [ShippingComponent],
  imports: [
    CommonModule,
    ShippingRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrqAPL17TOkeS4sc-VUEvvTCMavYqp-_c'
    })
  ]
})
export class ShippingModule { }
