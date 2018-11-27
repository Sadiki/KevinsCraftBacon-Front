import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/User';
import { Subscription } from 'rxjs';
import { OrderItem } from 'src/app/core/models/OrderItem';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

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

  isOneSelected: boolean = false;

  total: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    let localUsr: User = JSON.parse(localStorage.getItem('user'));

    //localUsr.cust_id = localUsr.cust_id + '';
    // localUsr.newsletter = localUsr.newsletter + ''; 
    this.subscription = this.userService.getCartItems(localUsr).subscribe(cart => {
      let items: OrderItem[] = [];
   

      for (let i = 0; i < cart.length; i++) {
        console.log(cart[i]);
        let currentStatus: string = '';


        this.total += parseFloat(cart[i].inventory.itemPrice);

        items.push({ id: cart[i].orderHistoryId, itemName: cart[i].inventory.itemName, quantity: cart[i].quantity, itemPrice: cart[i].inventory.itemPrice, status: 'Purchase Pending' });

        console.log(items[i]);
      }

      items.push()
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
    }
    else {
      this.selectedRow = undefined;
      e.currentTarget.style.background = 'white';
      console.log(this.selectedRow);
    }
  }

  deleteRow() {
    let itemId = this.selectedRow.querySelector('.mat-column-itemId').innerHTML.trim();
    let statusId = this.selectedRow.querySelector('.mat-column-statusId').innerHTML.trim();
    let custId = JSON.parse(localStorage.getItem('user')).cust_id;

    let orderItem: OrderItem = {};
    orderItem.cust_id = custId + '';
    orderItem.status_id = statusId;
    orderItem.item_id = itemId;

    console.log(orderItem);
    this.subscription = this.userService.deleteCartItem(orderItem).subscribe(itemDeleted => {
      console.log("Deleted!");
      this.getCartItems();
    });
  }

  goToCheckout() {
    this.router.navigate(['/profile/checkout']);
  }
}
