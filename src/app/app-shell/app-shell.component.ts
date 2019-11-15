import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Gifters, GiftService } from '../gift.service';

@Component({
  selector: 'xmas-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppShellComponent implements OnInit {
  value = Math.floor(Math.random() * 100);
  constructor(private gifterService: GiftService) {
    this.gifterService.getGifters();
   }

  ngOnInit() {
  }
}
