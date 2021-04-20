import { transition, trigger, useAnimation } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { slideOutUp } from 'ng-animate';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { DisplayGifters } from './../../gift.service';
import { WindowRef } from './../../window.service';

@Component({
  selector: 'xmas-to',
  template: `
    <ng-container *ngIf="gifter$ | async as gifter">
    <nav>
      <img alt="Merry Christmas"
         src="/assets/images/m-xmas@0.25x.jpg"
         srcset="/assets/images/m-xmas@0.25x.jpg 0.25x,
                 /assets/images/m-xmas@0.5x.jpg 0.5x,
                 /assets/images/m-xmas@0.75x.jpg 0.75x,
                 /assets/images/m-xmas.jpg 1x" />
                 <button mat-icon-button (click)="close()"><mat-icon>close</mat-icon></button>
    </nav>
      <h1>{{gifter.from}}</h1>
        <p>you have</p>
        <h2>{{gifter.to}}</h2>
    </ng-container>
  `,
  styleUrls: ['./to.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animate', [transition(':leave', useAnimation(slideOutUp))] )
  ],
  host: {
    '[@animate]': 'closeAnimation'
  }
})
export class ToComponent implements OnInit {
  gifter$: Observable<DisplayGifters> | undefined
  closeAnimation: number | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private windowRef: WindowRef,
    ) { }

  ngOnInit(): void {
    this.gifter$ = this.activatedRoute.paramMap.pipe(map(() => this.windowRef.nativeWindow?.history.state))
  }

  close() {
    timer(1).subscribe(() => this.router.navigate(['2020']))
  }
}
