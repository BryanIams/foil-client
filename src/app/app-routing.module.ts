import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/index';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', component: DashboardComponent },
      {path: 'game', loadChildren: 'app/components/game/game.module#GameModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
