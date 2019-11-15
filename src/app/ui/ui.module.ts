import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { DomSanitizer } from '@angular/platform-browser';

const MaterialUi = [
  MatCardModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatIconModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
]

@NgModule({
  imports: [
    CommonModule,
    ...MaterialUi
  ],
  declarations: [],
  exports: [
    ...MaterialUi
  ]
})
export class UiModule {
  constructor(private registry: MatIconRegistry, private sanitize: DomSanitizer) {
    // tslint:disable-next-line:max-line-length
    this.registry.addSvgIconInNamespace('pattern', 'charlie-brown', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/charlie-brown.svg'))
    this.registry.addSvgIconInNamespace('pattern', 'pine', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/pine-needles.svg'))
    this.registry.addSvgIconInNamespace('pattern', 'paper', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/paper.svg'))
    this.registry.addSvgIconInNamespace('pattern', 'snowflake', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/snowflake.svg'))
    this.registry.addSvgIconInNamespace('pattern', 'tree-blk', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/tree-blk.svg'))
    this.registry.addSvgIconInNamespace('pattern', 'tree-print', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/tree-print.svg'))
    this.registry.addSvgIconInNamespace('labels', '01', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/labels-01.svg'))
    this.registry.addSvgIconInNamespace('labels', '02', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/labels-02.svg'))
    this.registry.addSvgIconInNamespace('labels', '03', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/labels-03.svg'))
    this.registry.addSvgIconInNamespace('labels', '04', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/labels-04.svg'))
    this.registry.addSvgIconInNamespace('labels', '05', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/labels-05.svg'))
    this.registry.addSvgIconInNamespace('labels', '06', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/labels-06.svg'))
    this.registry.addSvgIconInNamespace('decor', 'geo-xmas', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/geo-xmas.svg'))
    // tslint:disable-next-line:max-line-length
    this.registry.addSvgIconInNamespace('decor', 'xmas-leaves-orn', this.sanitize.bypassSecurityTrustResourceUrl('assets/svg/xmas-leaves-orn.svg'))
  }
}
