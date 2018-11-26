import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Bacon } from '../../core/models/Bacon';
import { ChuckNorris } from '../../core/models/ChuckNorris';
import { BaconService } from '../../core/services/bacon.service';

@Component({
  selector: 'app-bacon',
  templateUrl: './bacon.component.html',
  styleUrls: ['./bacon.component.scss']
})
export class BaconComponent implements OnInit, OnDestroy {
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  bacon: Bacon;
  chuckNorris: ChuckNorris;

  constructor(private baconService: BaconService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription1 = this.route.params.subscribe((params) => {
      this.subscription2 = this.baconService.getOneBacon(params.id).subscribe((resp) => this.bacon = resp);
    });

    this.subscription3 = this.baconService.chuckNorris().subscribe((fact) => this.chuckNorris = fact);
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }
}
