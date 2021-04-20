import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'button[svgButton], a[svgButton]',
  template: `
    <mat-icon [svgIcon]="svg"></mat-icon>
    <ng-content></ng-content>
  `,
  styleUrls: ['./svg-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // animations: [
  //   trigger('tada', [transition(':enter', useAnimation(tada))])
  // ],
  // host: {
  //   '[@tada]': 'svg'
  // }
})
export class SvgButtonComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('svgButton') svg = '';

}
