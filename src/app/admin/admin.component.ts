import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Subscription } from 'rxjs';

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
    

    
    this.subscription = this.userService.getAllUsers().subscribe( resp=>{ 
        for(let i = 0; i < resp.length; i++){
          let liContainer = document.createElement('li');
          liContainer.innerHTML = resp[i].firstName;
          console.log(resp[i]);
          ulContainer.append(liContainer);
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
