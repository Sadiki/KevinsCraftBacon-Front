import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from '../../core/models/User';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  isValid = true;
  sessionUser = localStorage.getItem('user');
  subscription: Subscription;
  user: User = {};

  isCheckedYes: boolean = true;
  isCheckedNo: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (this.sessionUser) {
      this.router.navigate(['']);
    }
    this.user.newsletter = '1';
  }

  onCheckBoxClicked(){

    if(this.isCheckedYes){
      this.isCheckedYes = false;
      this.isCheckedNo = true;
      this.user.newsletter = '0';
    }else{
      this.isCheckedNo = false;
      this.isCheckedYes = true;
      this.user.newsletter = '1';
    }
  }
  register() {
    console.log(this.user);
    this.subscription = this.userService.register(this.user).subscribe((user) => {
      console.log("Test")
      if (!user) {
        this.isValid = false;
      } else {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['']);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
