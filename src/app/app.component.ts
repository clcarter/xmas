import { Component } from '@angular/core';
import { SnowService } from './snow.service';


@Component({
  selector: 'xmas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private snow: SnowService) {

  }

  ngOnInit(): void {
  }
}
