import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  lat: number = 28.0623;
  long: number = -82.4271;

  constructor() { }

  ngOnInit() {
  }


}
