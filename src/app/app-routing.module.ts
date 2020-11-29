import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '2018', loadChildren: () => import('./2018/2018.module').then(m => m.Y2018Module), data: {titleFragment: ' | 2018'} },
  { path: '2020', loadChildren: () => import('./2020/y2020.module').then(m => m.Y2020Module), data: {titleFragment: ' | 2020'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

