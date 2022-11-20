import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardModule } from '../card/card.module';

import { SvgButtonModule } from '../svg-button/svg-button.module';
import { ToComponent } from './to/to.component';
import { Y2022RoutingModule } from './y2022-routing.module';
import { Y2022Component } from './y2022.component';

@NgModule({
  declarations: [Y2022Component, ToComponent],
  imports: [CommonModule, Y2022RoutingModule, MatIconModule, MatButtonModule, SvgButtonModule, CardModule],
})
export class Y2022Module { }
