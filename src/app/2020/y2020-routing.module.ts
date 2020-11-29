import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToComponent } from '../2020/to/to.component';

import { Y2020Component } from './y2020.component';

const routes: Routes = [
  { path: '', component: Y2020Component },
  { path: 'from/:from', component: ToComponent, data: {animation: 'ToPage', titleFragment: '2020 | '} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Y2020RoutingModule { }
