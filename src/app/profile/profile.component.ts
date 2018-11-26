import { Component, OnInit, ViewChild, Inject, Injectable} from '@angular/core';

import { User } from '../core/models/User';
import { UserService } from '../core/services/user.service';
import { Subscription, iif } from 'rxjs';
import { CreditCard } from '../core/models/CreditCard';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../core/models/Order';
import { MatPaginator } from '@angular/material/';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

let orderData = [];

let globalDialog: MatDialog;

let clickedCard: CreditCard = {};

@Component({
  selector: 'app-profile', 
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

@Injectable()
export class ProfileComponent implements OnInit {

  usrString: string = localStorage.getItem('user');
  usrId: string;
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

  showView: string;

  isDeleteModeActive: boolean;

  subscription: Subscription;
  currUsr:User = {};
  usr: User = {};
  allOrders: Order[] = [];
  currCard: CreditCard = {};
  
  pastOrdersDataSource;
  wishlistDataSource;

  visible: boolean = false;

  pastDisplayedColumns: string[] = ['orderId', 'createdDate', 'orderUpdate', 'orderPrice'];
  wishlistDisplayedColumns: string[] = [];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  hidePaginator: boolean = true;



  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    globalDialog = this.dialog;
    this.getAllOrders();

    this.storeAccountInfo();
    this.showView = 'accInfo';
    
  }

  ngAfterViewInit(){
    this.showView = 'accInfo';
    this.hideAccountInput();
    this.getAllPaymentOpt();
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

  openNewPaymentDialog(): void{
    const dialogRef = this.dialog.open(ProfileDialogComponent, { width: '350px', data: {fullName: this.currCard.fullName, cardNumber: this.currCard.cardNumber, expirationDate: this.currCard.expirationDate, securityCode: this.currCard.securityCode}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if(result){
        this.addNewCard(result);
      }
        })
  }

  openCreditCardDialog(e): void{
    console.log(e.currentTarget);
    clickedCard.fullName = e.currentTarget.querySelector('#cardName').innerHTML;
    clickedCard.cardNumber =  e.currentTarget.querySelector('#cardNum').innerHTML;
    clickedCard.expirationDate =  e.currentTarget.querySelector('#cardExp').innerHTML;
    clickedCard.securityCode =  e.currentTarget.querySelector('#cardSecCode').innerHTML;
    clickedCard.cust_id = JSON.parse(localStorage.getItem('user')).cust_id +'';
    const dialogRef = globalDialog.open(PaymentDialogComponent, { width: '350px', data: {fullName: clickedCard.fullName, cardNumber: clickedCard.cardNumber, expirationDate: clickedCard.expirationDate, securityCode: clickedCard.securityCode}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');



      console.log(clickedCard);
    //  if(result){
        //ProfileComponent.updateCardInfo(result)
  //  }
  });
  }

  isVisible(e){
    console.log(e.currentTarget.id);
    if(e.currentTarget.id == 'updateAccInfo'){
      setTimeout(() => {this.hideAccountInput()});
      this.hidePaginator = true;
      this.showView = 'accInfo';
      setTimeout(() => {this.getAllPaymentOpt()});
    }else if (e.currentTarget.id == 'pastOrders'){
      this.hidePaginator = false;
      this.showView = 'pastOrders';

      //this.getAllOrders();

    }else {

    }
  }

  toggleElementVisibility(id){
    let element = document.getElementById(id);
    console.log(element);
    if(element.style.display == 'block'){
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  }

  hideAccountInput(){
    let allAccountInfo = document.getElementsByClassName('acc-forms');
    for(let i = 0; i < allAccountInfo.length; i++){
      let accountInfo: HTMLElement = allAccountInfo[i] as HTMLElement;
      accountInfo.style.display = 'none';
    }

  }

  showAccountInput(){
    let allAccountInfo = document.getElementsByClassName('acc-forms');
    for(let i = 0; i < allAccountInfo.length; i++){
      let accountInfo: HTMLElement = allAccountInfo[i] as HTMLElement;
      if(accountInfo.style.display == 'block'){
        accountInfo.style.display = 'none';
      }else{
        accountInfo.style.display = 'block';
      }
      
    }
  }

  updateAccountInfo(){
    let localUser:User = JSON.parse(localStorage.getItem('user'));
    if(!this.usr.city){
      this.usr.city = localUser.city;
    }

    if(!this.usr.cust_id){
      this.usr.cust_id = localUser.cust_id;
      console.log('id');
    }

    if(!this.usr.email){
      this.usr.email = localUser.email;
    }

    if(!this.usr.firstName){
      this.usr.firstName = localUser.firstName;
    }

    if(!this.usr.lastName){
      this.usr.lastName = localUser.lastName;
    }

    if(!this.usr.newsletter){
      this.usr.newsletter = localUser.newsletter;
    }

    if(!this.usr.password){
      this.usr.password = localUser.password;
    }

    if(!this.usr.phoneNumber){
      this.usr.phoneNumber = localUser.phoneNumber;
    }

    if(!this.usr.state){
      this.usr.state = localUser.state
    }

    if(!this.usr.streetAddress){
      this.usr.streetAddress = localUser.streetAddress
    }

    if(!this.usr.username){
      this.usr.username = localUser.username
    }

    if(!this.usr.zip){
      this.usr.zip = localUser.zip
    }

    this.subscription = this.userService.updateUser(this.usr).subscribe(user => {
      console.log("User:" + JSON.stringify(this.usr));
      localStorage.setItem('user', JSON.stringify(this.usr));
      this.currCard = this.usr;
      this.hideAccountInput();
      
    });
  }

  addNewCard(card: CreditCard){
   
    let tempUser = localStorage.getItem('user');
    card.cust_id = JSON.parse(tempUser).cust_id;

    console.log(card);

    this.subscription = this.userService.addNewCard(card).subscribe(newCard => {
      this.getAllPaymentOpt();
      // if (newCard) {
      //   localStorage.setItem('card', JSON.stringify(newCard));
        
      // }
    });
  }

  removeCard(card: CreditCard){
  console.log(card);
   this.userService.deleteCard(card).subscribe(currCard => {
      console.log('Deleted!');
      this.getAllPaymentOpt();
    });
  }

  updateCardInfo(cardUpdate){
    this.subscription = this.userService.updateCard(cardUpdate).subscribe(card => {
 
        this.getAllPaymentOpt();
      
    });
  }

  getAllOrders(){
    this.subscription = this.userService.getAllPastOrders().subscribe(orders=>{
      
      this.allOrders = orders;
      this.pastOrdersDataSource =  new MatTableDataSource(orders);
      this.pastOrdersDataSource.paginator = this.paginator;
      })
    }

  getAllPaymentOpt(){
    let payment_opts = document.getElementById('payment-opts');
    let paymentWrapper = document.createElement('paymentWrapper');
    if(payment_opts.firstChild){
      payment_opts.removeChild(payment_opts.firstChild);
    }

    let currUser = JSON.parse(localStorage.getItem('user'));
    this.subscription = this.userService.getAllPaymentOpts().subscribe(cards => {
      for(let i = 0; i < cards.length; i++){

        
        if(cards[i].customers.cust_id === currUser.cust_id){
        let card_container = document.createElement('div');

        let cardNameLabel = document.createElement('p');
        cardNameLabel.innerText = "Card Name: ";
        let cardName = document.createElement('p');
        cardName.innerText = cards[i].fullName;
        cardName.setAttribute('id', 'cardName');

        let cardNumLabel = document.createElement('p');
        cardNumLabel.innerText="Card Number: ";
        let cardNum = document.createElement('p');
        cardNum.innerText = cards[i].cardNumber;
        cardNum.setAttribute('id', 'cardNum');

        let cardExpLabel = document.createElement('p');
        cardExpLabel.innerText = "Card Expiration: "
        let cardExp = document.createElement('p');
        cardExp.innerText = cards[i].expirationDate;
        cardExp.setAttribute('id','cardExp');

        let cardSecCodeLabel = document.createElement('p');
        cardSecCodeLabel.innerText = "Card Security Code: ";
        let cardSecCode =  document.createElement('p');
        cardSecCode.innerText = cards[i].securityCode+'';
        cardSecCode.setAttribute('id', 'cardSecCode');

        cardNameLabel.style.display = 'inline';
        cardName.style.display = 'inline';  
        card_container.appendChild(document.createElement('p'));
        card_container.appendChild(cardNameLabel);
        card_container.appendChild(cardName);

        cardNumLabel.style.display ='inline';
        cardNum.style.display = 'inline';
        card_container.appendChild(document.createElement('p'));
        card_container.appendChild(cardNumLabel);
        card_container.appendChild(cardNum);

        cardExpLabel.style.display='inline';
        cardExp.style.display = 'inline';
        card_container.appendChild(document.createElement('p'));
        card_container.appendChild(cardExpLabel);
        card_container.appendChild(cardExp);

        cardSecCodeLabel.style.display='inline';
        cardSecCode.style.display='inline';
        card_container.appendChild(document.createElement('p'));
        card_container.appendChild(cardSecCodeLabel);
        card_container.appendChild(cardSecCode);   

        card_container.setAttribute('id', 'paymentDiv'+ i);
        card_container.setAttribute('class', 'paymentCard');

        card_container.addEventListener('click', this.openCreditCardDialog);
        paymentWrapper.appendChild(card_container);
       
      }
    }
    payment_opts.appendChild(paymentWrapper);

    }) 
  }

  getClickedInfo(){
    let allPaymentOpts = document.getElementsByClassName('paymentCard');

    // for(let i = 0; i < allPaymentOpts.length; i++){
    //   this.clickedCard.fullName = allPaymentOpts[i].querySelector('#cardName').innerHTML;
    //   this.clickedCard.cardNumber = allPaymentOpts[i].querySelector('#cardNum').innerHTML;
    //   this.clickedCard.expirationDate = allPaymentOpts[i].querySelector('#cardExp').innerHTML;
    //   this.clickedCard.securityCode = allPaymentOpts[i].querySelector('#cardSecCode').innerHTML;
    //   this.clickedCard.cust_id = JSON.parse(localStorage.getItem('user')).cust_id +'';
    // }
  }
  
deletePaymentOpts(){
 
  let alldeleteCheckbox = document.getElementsByClassName('deleteCheckbox');

  for(let i = 0; i < alldeleteCheckbox.length; i++){
    let checkbox : HTMLInputElement = alldeleteCheckbox[i] as HTMLInputElement;
    if( checkbox.checked === true){
      let currCard: CreditCard = {};
      currCard.fullName = checkbox.parentNode.querySelector('#cardName').innerHTML;
      currCard.cardNumber = checkbox.parentNode.querySelector('#cardNum').innerHTML;
      currCard.expirationDate = checkbox.parentNode.querySelector('#cardExp').innerHTML;
      currCard.securityCode = checkbox.parentNode.querySelector('#cardSecCode').innerHTML;
      currCard.cust_id = JSON.parse(localStorage.getItem('user')).cust_id +'';
      this.removeCard(currCard);
      
    }
  }
  this.cleanUp();
  this.isDeleteModeActive = false;
}

cleanUp(){
  let alldeleteCheckbox = document.getElementsByClassName('deleteCheckbox');

  for(let i = 0; i < alldeleteCheckbox.length; i++){
    let checkbox : HTMLInputElement = alldeleteCheckbox[i] as HTMLInputElement;
    checkbox.remove;
  }
}

getUserWishList(){
  this.subscription = this.userService.getWishList(this.currUsr).subscribe(wishlist=>{
    this.wishlistDataSource = new MatTableDataSource(wishlist);
    this.pastOrdersDataSource.paginator = this.paginator;
  });

}

}

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
})

export class ProfileDialogComponent{
  constructor( public dialogRef: MatDialogRef<ProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreditCard){}
    
    onNoClick(): void {
      this.dialogRef.close();
    }
}

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
})

export class PaymentDialogComponent{
  constructor( public dialogRef: MatDialogRef<PaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreditCard, private profileComponent:ProfileComponent){}

     cardUpdate: CreditCard = clickedCard;
  
    onUpdateClick(): void{
      console.log(this.cardUpdate);
     this.profileComponent.updateCardInfo(this.cardUpdate);
    }
    
    onRemoveClick(): void{
      this.profileComponent.removeCard(this.cardUpdate);
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
}