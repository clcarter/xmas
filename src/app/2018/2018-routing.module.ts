import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToComponent } from './to/to.component';
import { Y2018Component } from './y2018.component';


const routes: Routes = [
  {path: '', component: Y2018Component},
  {path: 'to/:to/from/:from', component: ToComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Y2018RoutingModule { }
