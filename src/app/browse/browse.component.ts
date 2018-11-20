import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaconService } from '../core/services/bacon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit, OnDestroy {
  bacon: object[];
  subscription: Subscription;

  constructor(private baconService: BaconService) { }

  // displayAllBacon() {
  //   const admincontainer = document.getElementById('browse-itemlist');

  //   this.subscription = this.baconService.getAllBacon().subscribe(resp => {
  //     for (let i = 0; i < resp.length; i++) {
  //       // name = resp[i].item_name;
  //       this.liContainer = document.createElement('li');
  //       this.liContainer.innerHTML = resp[i].item_name;
  //       admincontainer.appendChild(this.liContainer);
  //     }
  //   });
  // }

  ngOnInit() {
    this.subscription = this.baconService.getAllBacon().subscribe((resp) => this.bacon = resp);
  }

  ngOnDestroy() {
    if (this.subscription) {
    this.subscription.unsubscribe();
    }
  }
}
