import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core'
import { interval } from 'rxjs'
import { IconRegistry } from '../ui/icon.service'

@Component({
  selector: 'xmas-tree',
  template: ` <img
    src="https://xmas.s3.us-west-2.amazonaws.com/tree@2x.png"
    srcset="
      https://xmas.s3.us-west-2.amazonaws.com/tree@2x.png   2x,
      https://xmas.s3.us-west-2.amazonaws.com/tree.png      1x,
      https://xmas.s3.us-west-2.amazonaws.com/tree@1.5x.png 1.5x,
      https://xmas.s3.us-west-2.amazonaws.com/tree@3x.png   3x
    "
  />`,
  styleUrls: ['./tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent implements OnInit {
  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private icons: IconRegistry
  ) {}

  ngOnInit() {
    const el = this.elementRef.nativeElement.firstElementChild
    let val: number = Math.floor(Math.random() * Math.random() * 365)
    if (this.icons.platformBrowser) {
      interval(Math.floor(Math.random() * 600) + 100).subscribe(() => {
        val += 5
        this.renderer.setStyle(el, 'filter', `hue-rotate(${val}deg)`)
      })
    }
  }
}
