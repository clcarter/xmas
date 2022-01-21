import { transition, trigger, useAnimation } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInDown, slideOutDown, zoomIn } from 'ng-animate';
import { timer } from 'rxjs';

import { IconRegistry } from './ui/icon.service';

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
  @ViewChild('video', {read: ElementRef}) video!: ElementRef<HTMLVideoElement> 
  constructor(
    private router: Router,
    public icons: IconRegistry,
  ) {}

  ngOnInit(): void {
    timer(2000).subscribe(() => this.router.navigate(['2021']))
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.play()
  }
  
  play() {
    if(this.video) {
      this.video.nativeElement.muted = true
      const played = this.video.nativeElement.play()
      played.then().catch((err) => console.log('didn\'t start', err))
    }
  }

  animate(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation
  }
}