import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent, DashboardComponent } from './components/index';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', component: DashboardComponent },
      {path: 'game/board', pathMatch: 'full', component: BoardComponent }
    ]
  }
];

export const RouteableComponents = [
  DashboardComponent,
  BoardComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
