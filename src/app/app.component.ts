import { transition, trigger, useAnimation } from '@angular/animations'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router, RouterOutlet } from '@angular/router'
import { slideInDown, slideOutDown, zoomIn } from 'ng-animate'
import { timer } from 'rxjs'

import { IconRegistry } from './ui/icon.service'

import type { OnInit } from '@angular/core'
@Component({
  selector: 'xmas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('routeAnimations', [
      transition('* => ToPage', useAnimation(slideInDown)),
      transition('ToPage => *', useAnimation(slideOutDown)),
      transition('* <=> *', useAnimation(zoomIn)),
    ]),
    trigger('gifterAnimate', [
      transition('* => ToPage', useAnimation(slideInDown)),
      transition('ToPage => *', useAnimation(slideOutDown)),
      transition('* <=> *', useAnimation(zoomIn)),
    ]),
  ],
})
export class AppComponent implements OnInit {
  trees = Array(35).fill(1)

  constructor(
    private router: Router,
    private title: Title,
    public icons: IconRegistry
  ) {}

  ngOnInit(): void {
    timer(2000).subscribe(() => this.router.navigate(['2020']))
  }

  animate(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation
  }
}
