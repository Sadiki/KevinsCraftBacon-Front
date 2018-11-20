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

  ngOnInit() {
    this.subscription = this.baconService.getAllBacon().subscribe((resp) => {
      console.log(resp);
      this.bacon = resp;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
