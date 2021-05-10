import { transition, trigger, useAnimation } from '@angular/animations'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { tada } from 'ng-animate'
import { Observable, timer } from 'rxjs'

import { DisplayGifters, GiftService } from '../gift.service'

@Component({
  selector: 'xmas-y2020',
  templateUrl: './y2020.component.html',
  styleUrls: ['./y2020.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('navigate', [transition('* <=> *', useAnimation(tada))]),
  ],
})
export class Y2020Component implements OnInit {
  gifters$: Observable<DisplayGifters[]> | undefined
  constructor(private giftService: GiftService, private router: Router) { }

  ngOnInit(): void {
    this.gifters$ = this.giftService.gifters$
  }

  navigate(gifter: DisplayGifters): void {
    gifter.leave = true
    timer(700).subscribe(() =>
      this.router.navigate(
        ['/', '2020', { outlets: { gifter: ['from', gifter.from] } }],
        { state: gifter }
      )
    )
  }
}
