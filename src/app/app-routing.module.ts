import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '2018',
    loadChildren: () => import('./2018/2018.module').then((m) => m.Y2018Module),
    data: { titleFragment: ' | 2018' },
  },
  {
    path: '2020',
    loadChildren: () =>
      import('./2020/y2020.module').then((m) => m.Y2020Module),
    data: { titleFragment: ' | 2020' },
  },
  {
    path: '2021',
    loadChildren: () =>
      import('./2021/y2021.module').then((m) => m.Y2021Module),
    data: { titleFragment: ' | 2021' },
  },
  {
    path: '2022',
    loadChildren: () =>
      import('./2022/y2022.module').then((m) => m.Y2022Module),
    data: { titleFragment: ' | 2022' },
  },
  { path: '**', redirectTo: '2022' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'ignore',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
