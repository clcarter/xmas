import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ToComponent } from '../2021/to/to.component'

import { Y2022Component } from './y2022.component'

const routes: Routes = [
  { path: '', component: Y2022Component },
  {
    path: 'from/:from',
    component: ToComponent,
    data: { animation: 'ToPage', titleFragment: ' | 2022 | From' },
    outlet: 'gifter',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Y2022RoutingModule {}
