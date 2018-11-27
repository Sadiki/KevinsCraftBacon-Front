import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Bacon } from '../../core/models/Bacon';
import { OrderItem } from '../../core/models/OrderItem';
import { BaconService } from '../../core/services/bacon.service';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-bacon',
  templateUrl: './bacon.component.html',
  styleUrls: ['./bacon.component.scss']
})
export class BaconComponent implements OnInit, OnDestroy {
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;
  bacon: Bacon;
  chuckNorris: string;
  orderItem: OrderItem = {};
  select: number[];
  @ViewChild('selector') quantity;

  constructor(private baconService: BaconService,
              private orderService: OrderService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.subscription1 = this.route.params.subscribe((params) => {
      this.subscription2 = this.baconService.getOneBacon(params.id).subscribe((resp) => {
        this.bacon = resp;
        this.select = new Array<number>(this.bacon.onHandQuantity);
      });
    });

    this.subscription3 = this.baconService.chuckNorris().subscribe((fact) => this.chuckNorris = fact.value);
  }

  addToCart(event: any) {
    this.orderItem.cust_id = JSON.parse(localStorage.getItem('user')).cust_id;
    this.orderItem.quantity = this.quantity.value;
    this.orderItem.inventory = this.bacon;

    if (event.target.parentElement.id === 'cart-btn') {
      this.orderItem.status = '1';
    } else {
      this.orderItem.status = '2';
    }

    this.subscription4 = this.orderService.addToCart(this.orderItem).subscribe((item) => {
      if (item) {
        this.router.navigate(['']);
      }
    });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }
}
