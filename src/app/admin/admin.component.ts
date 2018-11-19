import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/User';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  subscription: Subscription;
  constructor(private userService: UserService) { }

  displayAllUsers(){
    let admincontainer = document.getElementById('admin-container')
    let ulContainer = document.createElement('ul');
    let liContainer = document.createElement('li');
  

    console.log(environment.url);
    
    this.subscription = this.userService.getAllUsers().subscribe( resp=>{ 
        for(let i = 0; i < resp.length; i++){
          let name = resp[i].fname;
          liContainer.innerHTML = name;
          ulContainer.appendChild(liContainer);
        }
        
        admincontainer.appendChild(ulContainer);
      
        });
  }

  ngOnInit() {
    this.displayAllUsers();
  }

  ngOnDestroy(){
    if (this.subscription) {
    this.subscription.unsubscribe();
    }
  }

}
