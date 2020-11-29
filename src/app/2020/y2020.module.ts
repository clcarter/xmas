import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SvgButtonComponent } from '../svg-button/svg-button.component';
import { ToComponent } from './to/to.component';
import { Y2020RoutingModule } from './y2020-routing.module';
import { Y2020Component } from './y2020.component';


@NgModule({
  declarations: [Y2020Component, SvgButtonComponent, ToComponent],
  imports: [
    CommonModule,
    Y2020RoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class Y2020Module { }
