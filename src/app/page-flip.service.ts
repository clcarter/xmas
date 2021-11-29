import { ElementRef, Injectable, QueryList } from '@angular/core';
import { PageFlip, SizeType } from 'page-flip';

@Injectable({
  providedIn: 'root'
})
export class PageFlipService {
  pageFlip!: PageFlip;
  constructor() { }
  init(elementRef: ElementRef<HTMLDivElement>, pages: QueryList<ElementRef<HTMLElement>>, [width = 298, height = 422]) {
    this.pageFlip = new PageFlip(
      elementRef.nativeElement,
      {
        // start page index
        startPage: 0,
        size: 'fixed' as SizeType,
        // width & height *(REQUIRED)
        width: width,
        height: height,
        // draw book shadows
        drawShadow: false,
        // animation speed
        flippingTime: 1000,
        // allows to switch to portrait mode
        usePortrait: true,
        // z-index property
        startZIndex: 0,
        // auto resizes the parent container to fit the book
        autoSize: true,
        // max opacity of shadow
        maxShadowOpacity: 1,
        // shows book cover
        showCover: true,
      }
    );
    this.pageFlip.loadFromHTML(pages.toArray().map(it => it.nativeElement))
  }
}
