import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from '../../core/models/User';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isValid = true;
  sessionUser = localStorage.getItem('user');
  subscription: Subscription;
  user: User;
  usr: string;
  pwd: string;

  constructor(private userService: UserService, private router: Router, private location: Location) { }

  ngOnInit() {
    if (this.sessionUser) {
      this.router.navigate(['']);
    }
  }

  login() {
    this.user = {usr: this.usr, pwd: this.pwd};
    this.subscription = this.userService.login(this.user).subscribe((user) => {
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
