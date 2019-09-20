import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Y2018RoutingModule } from './2018-routing.module';
import { Y2018Component } from '../y2018/y2018.component';
import { ToComponent } from './to/to.component';


@NgModule({
  declarations: [Y2018Component, ToComponent],
  imports: [
    CommonModule,
    Y2018RoutingModule,
  ]
})
export class Y2018Module { }
