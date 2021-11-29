import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
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
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('svgButton') svg = ''
}
