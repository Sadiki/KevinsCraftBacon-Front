import { Component, OnInit } from '@angular/core';
import { BaconService } from '../core/services/bacon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  subscription: Subscription;
  constructor(private baconService: BaconService) { }

  displayAllBacon(){
    let admincontainer = document.getElementById('browse-itemlist')
    let liContainer = document.createElement('li');

    
    this.subscription = this.baconService.getAllBacon().subscribe( resp=>{ 
        for(let i = 0; i < resp.length; i++){
          let name = resp[i].name;
          liContainer.innerHTML = name;
          admincontainer.appendChild(liContainer);
        }
        });
  }

  ngOnInit() {
    this.displayAllBacon();
  }

  ngOnDestroy(){
    if (this.subscription) {
    this.subscription.unsubscribe();
    }
  }
}
