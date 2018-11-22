import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../core/models/User';
import { UserService } from '../core/services/user.service';
import { Subscription } from 'rxjs';
import { CreditCard } from '../core/models/CreditCard';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../core/models/Order';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-profile', 
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  usrString: string = localStorage.getItem('user');
  currUsr: User;
  usrId: number;
  usrFn: string;
  usrLn: string;
  usrNm: string;
  usrPass: string;
  usrEm: string;
  usrPhNum: string;
  usrAddr: string;
  usrCity: string;
  usrSte: string;
  usrZip: string;

  subscription: Subscription;
  usr: User = JSON.parse(localStorage.getItem('user'));
  allOrders: Order[];
  card: CreditCard;

  visible: boolean = false;

  displayedColumns: string[] = ['Product Name', 'Description', 'Quantity', 'Shipping Status'];
  dataSource = new MatTableDataSource<Order>(this.allOrders);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.storeAccountInfo();
    this.dataSource.paginator = this.paginator;
  }

  storeAccountInfo(){    
    this.currUsr = JSON.parse(this.usrString);

  if(this.currUsr){

    this.usrId = this.currUsr.cust_id;
    this.usrFn = this.currUsr.firstName;
    this.usrLn = this.currUsr.lastName;
    this.usrNm = this.currUsr.username;
    this.usrPass = this.currUsr.password;
    this.usrEm = this.currUsr.email;
    this.usrPhNum = this.currUsr.phoneNumber;
    this.usrAddr = this.currUsr.streetAddress;
    this.usrCity = this.currUsr.city;
    this.usrSte = this.currUsr.state;
    this.usrZip = this.currUsr.zip;
    }
  }

  isVisible(){
    this.visible = !this.visible;
    console.log(this.visible);
  }

  updateAccountInfo(){
    this.subscription = this.userService.updateUser(this.usr).subscribe(user => {
      console.log("User:" + this.usr);

       
        localStorage.setItem('user', JSON.stringify(this.usr));
      
    });
  }

  AddNewCard(){
    this.subscription = this.userService.updateCard(this.card).subscribe(card => {
      
      if (card) {
        localStorage.setItem('card', JSON.stringify(card));
      }
    });
  }

  UpdateCardInfo(){
    this.subscription = this.userService.updateCard(this.card).subscribe(card => {
      if (card) {
        localStorage.setItem('card', JSON.stringify(card));
      }
    });
  }

  getAllOrders(){
    this.subscription = this.userService.getAllPastOrders().subscribe(orders=>{
      this.allOrders = orders;
      })
  }



}
