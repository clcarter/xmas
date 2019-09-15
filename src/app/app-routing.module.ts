import { HomeComponent } from './home/home.component';
import { ToComponent } from './to/to.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '2018', loadChildren: () => import('./2018/2018.module').then(m => m.Y2018Module)},
  {path: 'to/:to/from/:from', component: ToComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

