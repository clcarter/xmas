import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DisplayGifters, GiftService } from './../gift.service';

@Component({
  selector: 'xmas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gifters: Observable<DisplayGifters[]>
  bgs = [
    'url(assets/svg/charlie-brown.svg)',
    'url(assets/svg/pine-needles.svg)',
    'url(assets/svg/tree-print.svg)',
    'url(assets/svg/candy-stripe.svg)',
    'url(assets/svg/snowflake.svg)',
    'url(assets/svg/tree-blk.svg)',
    'url(assets/svg/paper.svg)'
  ]

  constructor(private gift: GiftService, private router: Router) {}

  ngOnInit() {
    this.gifters = this.gift.getGifters()
  }

  route(giver) {
    this.router.navigate(['to', giver.to, 'from', giver.from]);
  }
}
