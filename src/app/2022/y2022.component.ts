import { transition, trigger, useAnimation } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { tada } from 'ng-animate';
import { map, Observable, timer } from 'rxjs';

import { DisplayGifters, GiftService } from '../gift.service';

@Component({
  selector: 'xmas-y2022',
  templateUrl: './y2022.component.html',
  styleUrls: ['./y2022.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('navigate', [transition('* <=> *', useAnimation(tada))]),
  ],
})
export class Y2022Component implements OnInit {
  isHandset$!: Observable<boolean>
  gifters$: Observable<DisplayGifters[]> | undefined
  constructor(private giftService: GiftService, private router: Router, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isHandset$ = this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).pipe(map(result => result.matches))

    this.gifters$ = this.giftService.gifters$
  }

  navigate(gifter: DisplayGifters): void {
    gifter.leave = true
    timer(700).subscribe(() =>
      this.router.navigate(
        ['/', '2022', { outlets: { gifter: ['from', gifter.from] } }],
        { state: gifter }
      )
    )
  }
}
