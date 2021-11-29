import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'xmas-snow',
  templateUrl: './snow.component.html',
  styleUrls: ['./snow.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
