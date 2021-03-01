import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../interfaces/film';
import { Planets } from '../interfaces/planets';
import { Characters } from '../interfaces/characters';
import { Starships } from '../interfaces/starships';
import { FilmList } from '../interfaces/film-list';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(
    private http: HttpClient
  ) { }


  getFilms() {
    const path = '/api/films';
    return this.http.get<FilmList>(path);
  }

  getFilm(id) {
    const path = `/api/films/${id}/`;
    return this.http.get<Film>(path);
  }

  getPlanets(id) {
    const path = `/api/planets/${id}/`;
    return this.http.get<Planets>(path);
  }

  getCharacters(id) {
    const path = `/api/people/${id}/`;
    return this.http.get<Characters>(path);
  }

  getStarships(id) {
    const path = `/api/starships/${id}/`;
    return this.http.get<Starships>(path);
  }
}
