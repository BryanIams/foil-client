import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GameModule } from './components/game/game.module';
import { DashboardComponent } from './components/index';

import { CardImagesService } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GameModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [
    CardImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
