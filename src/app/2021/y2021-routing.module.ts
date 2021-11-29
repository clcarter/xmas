import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ToComponent } from '../2021/to/to.component'

import { Y2021Component } from './y2021.component'

const routes: Routes = [
  { path: '', component: Y2021Component },
  {
    path: 'from/:from',
    component: ToComponent,
    data: { animation: 'ToPage', titleFragment: ' | 2021 | From' },
    outlet: 'gifter',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Y2021RoutingModule {}
