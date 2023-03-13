import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmcardComponent } from './filmcard/filmcard.component';

import { FilmServiceService } from './film-service.service';
// import * as jsonData from '../assets/data.json';

// import data from 'src/assets/data.json';
// import data from './assets/data.json';

@NgModule({
  declarations: [
    AppComponent,
    FilmcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FilmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
