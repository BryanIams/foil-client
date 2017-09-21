import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './index';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: BoardComponent }
  ])],
  exports: [RouterModule]
})
export class GameRoutingModule { }
