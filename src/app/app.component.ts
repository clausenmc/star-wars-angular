import { Component } from '@angular/core';
import {FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  constructor(
    private filmService: FilmService
  ){}

  getFilms() {
    this.filmService.getFilms()
    .subscribe(films => {
      console.log(films);
    });
  }



}