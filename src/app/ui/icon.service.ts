import { isPlatformBrowser } from '@angular/common';
import { APP_ID, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const icons = {
  pattern: [
    {
      iconName: 'charlie-brown',
      url: 'assets/svg/charlie-brown.svg',
    },
    {
      iconName: 'pine',
      url: 'assets/svg/pine-needles.svg',
    },
    {
      iconName: 'paper',
      url: 'assets/svg/paper.svg',
    },
    {
      iconName: 'snowflake',
      url: 'assets/svg/snowflake.svg',
    },
    {
      iconName: 'tree-blk',
      url: 'assets/svg/tree-blk.svg',
    },
    {
      iconName: 'tree-print',
      url: 'assets/svg/tree-print.svg',
    },
  ],
  labels: [
    { iconName: '01', url: 'assets/svg/labels-01.svg' },
    { iconName: '02', url: 'assets/svg/labels-02.svg' },
    { iconName: '03', url: 'assets/svg/labels-03.svg' },
    { iconName: '04', url: 'assets/svg/labels-04.svg' },
    { iconName: '05', url: 'assets/svg/labels-05.svg' },
    { iconName: '06', url: 'assets/svg/labels-06.svg' },
  ],
  ornaments: [
    { iconName: '01', url: 'assets/svg/ornament-01.svg' },
    { iconName: '02', url: 'assets/svg/ornament-02.svg' },
    { iconName: '03', url: 'assets/svg/ornament-03.svg' },
    { iconName: '04', url: 'assets/svg/ornament-04.svg' },
    { iconName: '05', url: 'assets/svg/ornament-05.svg' },
    { iconName: '06', url: 'assets/svg/ornament-06.svg' },
  ],
  decor: [
    { iconName: 'geo-xmas', url: 'assets/svg/geo-xmas.svg' },
    { iconName: 'xmas-leaves-orn', url: 'assets/svg/xmas-leaves-orn.svg' },
  ],
};

@Injectable({ providedIn: 'root' })
export class IconRegistry {
  platformBrowser: boolean
  constructor(
    private registry: MatIconRegistry,
    private sanitize: DomSanitizer,
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(APP_ID) appId: string) {
    this.platformBrowser = isPlatformBrowser(platformId)
  }

  register() {
    // if (this.platformBrowser) {
      Object.entries(icons).forEach(([namespace, iconConfig]) => {
        iconConfig.forEach(({ iconName, url }) => {
          this.registry.addSvgIconInNamespace(namespace, iconName, this.sanitize.bypassSecurityTrustResourceUrl(url))
        })
      })
    // }
  }
}
