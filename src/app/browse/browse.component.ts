import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaconService } from '../core/services/bacon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit, OnDestroy {
  liContainer: any;
  subscription: Subscription;
  constructor(private baconService: BaconService) { }

  displayAllBacon() {
    const admincontainer = document.getElementById('browse-itemlist');

    this.subscription = this.baconService.getAllBacon().subscribe(resp => {
      for (let i = 0; i < resp.length; i++) {
        // name = resp[i].item_name;
        this.liContainer = document.createElement('li');
        this.liContainer.innerHTML = resp[i].item_name;
        admincontainer.appendChild(this.liContainer);
      }
    });
  }

  ngOnInit() {
    // this.displayAllBacon();
  }

  ngOnDestroy() {
    if (this.subscription) {
    this.subscription.unsubscribe();
    }
  }
}
