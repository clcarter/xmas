import { Directive, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Directive({
  selector: '[xmasTitle]',
})
export class TitleDirective {
  constructor(private title: Title) {}

  @Input() set xmasTitle(outlet: RouterOutlet) {
    outlet.activateEvents.subscribe(() => {
      this.title.setTitle(
        `Carter Christmas Exchange${
          outlet?.activatedRouteData?.titleFragment ?? ''
        }`
      )
    })
  }
}
