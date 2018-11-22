import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BaconService } from '../core/services/bacon.service';
import { Bacon } from '../core/models/Bacon';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit, OnDestroy {
  bacon: Bacon[];
  subscription: Subscription;

  constructor(private baconService: BaconService) { }

  ngOnInit() {
    this.subscription = this.baconService.getAllBacon().subscribe((resp) => this.bacon = resp);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
