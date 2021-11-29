import { ChangeDetectionStrategy, Component, ElementRef, Input, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DisplayGifters } from '../gift.service';

import { PageFlipService } from '../page-flip.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'xmas-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flip-book'
  }
})
export class CardComponent {
  @Input() gifter!: DisplayGifters
  @Input() mobile: boolean = false
  @ViewChildren('page', { read: ElementRef }) pages!: QueryList<ElementRef<HTMLDivElement>>
  isHandset$!: Observable<boolean>

  constructor(private pageFlipper: PageFlipService, private el: ElementRef, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isHandset$ = this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).pipe(map(result => result.matches))
  }

  ngAfterViewInit(): void {
    this.pageFlipper.init(this.el, this.pages, this.mobile ? [178, 253] : [undefined, undefined])
  }

}
