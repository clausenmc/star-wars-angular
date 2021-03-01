import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { EpisodeComponent } from './episode/episode.component';
import { PlanetsComponent } from './planets/planets.component';
import { CharactersComponent } from './characters/characters.component';
import { StarshipsComponent } from './starships/starships.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { invertTextPipe } from './services/invertText';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    EpisodeComponent,
    PlanetsComponent,
    CharactersComponent,
    StarshipsComponent,
    LearnMoreComponent,
    invertTextPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
