import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardModule } from '../card/card.module';

import { SvgButtonModule } from '../svg-button/svg-button.module';
import { ToComponent } from './to/to.component';
import { Y2021RoutingModule } from './y2021-routing.module';
import { Y2021Component } from './y2021.component';

@NgModule({
  declarations: [Y2021Component, ToComponent],
  imports: [CommonModule, Y2021RoutingModule, MatIconModule, MatButtonModule, SvgButtonModule, CardModule],
})
export class Y2021Module { }
