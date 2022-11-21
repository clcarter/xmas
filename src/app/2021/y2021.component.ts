import { transition, trigger, useAnimation } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { tada } from 'ng-animate';
import { map, Observable, timer } from 'rxjs';

import { DisplayGifters, GiftService } from '../gift.service';

@Component({
  selector: 'xmas-y2021',
  templateUrl: './y2021.component.html',
  styleUrls: ['./y2021.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('navigate', [transition('* <=> *', useAnimation(tada))]),
  ],
})
export class Y2021Component implements OnInit {
  isHandset$!: Observable<boolean>
  gifters$: Observable<DisplayGifters[]> | undefined
  constructor(private giftService: GiftService, private router: Router, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.isHandset$ = this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).pipe(map(result => result.matches))

    this.gifters$ = this.giftService.getGifters(2021)
  }

  navigate(gifter: DisplayGifters): void {
    gifter.leave = true
    timer(700).subscribe(() =>
      this.router.navigate(
        ['/', '2021', { outlets: { gifter: ['from', gifter.from] } }],
        { state: gifter }
      )
    )
  }
}
