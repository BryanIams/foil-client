import { GameRoutingModule } from './game-routing.module';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { BoardComponent, SitesComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    GameRoutingModule
  ],
  declarations: [
    BoardComponent,
    SitesComponent
  ],
  providers: []
})
export class GameModule { }
