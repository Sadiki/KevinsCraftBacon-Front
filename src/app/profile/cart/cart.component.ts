import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/User';
import { Subscription } from 'rxjs';
import { OrderItem } from 'src/app/core/models/OrderItem';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/Order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartDataSource;
  cartDisplayedColumns: string[] = ['itemId', 'itemName', 'quantity', 'statusId', 'price'];

  subscription: Subscription;

  selectedRow;

  isOneSelected = false;

  total = 0;

  isCheckingOut = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    const localUsr: User = JSON.parse(localStorage.getItem('user'));

    // localUsr.cust_id = localUsr.cust_id + '';
    // localUsr.newsletter = localUsr.newsletter + '';
    this.subscription = this.userService.getCartItems(localUsr).subscribe(cart => {
      const items: OrderItem[] = [];

      for (let i = 0; i < cart.length; i++) {
        const currentStatus = '';
        this.total += cart[i].inventory.itemPrice *  parseFloat(cart[i].quantity);
        items.push({
          id: cart[i].orderHistoryId,
          itemName: cart[i].inventory.itemName,
          quantity: cart[i].quantity,
          itemPrice: cart[i].inventory.itemPrice,
          status: 'Purchase Pending'
        });
      }

      items.push();
      this.cartDataSource = new MatTableDataSource(items);
      this.cartDataSource.paginator = this.paginator;
    });
  }

  selectRow(e) {
    if (e.currentTarget.style.background != 'lightgrey') {
      this.selectedRow = e.currentTarget;
      this.selectedRow.style.background = 'lightgrey';
      console.log(this.selectedRow);
      this.isOneSelected = true;
    } else {
      this.selectedRow = undefined;
      e.currentTarget.style.background = 'white';
      console.log(this.selectedRow);
    }
  }

  deleteRow() {
    const itemId = this.selectedRow.querySelector('.mat-column-itemId').innerHTML.trim();
    const statusId = this.selectedRow.querySelector('.mat-column-statusId').innerHTML.trim();
    const custId = JSON.parse(localStorage.getItem('user')).cust_id;

    const orderItem: OrderItem = {};
    orderItem.cust_id = custId + '';
    orderItem.status = statusId;
    orderItem.item_id = itemId;

    console.log(orderItem);
    this.subscription = this.userService.deleteCartItem(orderItem).subscribe(itemDeleted => {
      console.log('Deleted!');
      this.getCartItems();
    });
  }

  goToCheckout() {
    this.isCheckingOut = true;
    setTimeout(() => this.getAllPaymentOpt());
  }

  getAllPaymentOpt() {
    const paymentSelectElement = document.getElementById('paymentSelect');

    const currUser = JSON.parse(localStorage.getItem('user'));
    this.subscription = this.userService.getAllPaymentOpts().subscribe(cards => {
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].customers.cust_id === currUser.cust_id) {
        const paymentOptionElement: HTMLOptionElement = document.createElement('option');

        paymentOptionElement.value = cards[i].fullName;
        paymentOptionElement.innerText = cards[i].fullName;

        paymentSelectElement.appendChild(paymentOptionElement);
        }
      }
    });
  }

  completeCheckout() {
    this.isCheckingOut = false;

    const localUsr: User = JSON.parse(localStorage.getItem('user'));
    const orderList: Order = {};

    orderList.cust_id = localUsr.cust_id + '';
    orderList.shipping_status = '1';
    orderList.delivery_method = '1';
    orderList.shipping_price = '4.95';
    orderList.order_price = this.total + '';

    console.log(orderList);
    this.subscription =  this.userService.checkout(orderList).subscribe(receipt => {
      console.log(receipt);
      console.log('Checkout complete!');
    });

    this.router.navigate(['/profile/confirmation']);
  }
}
