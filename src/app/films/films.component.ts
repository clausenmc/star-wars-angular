import { Component, OnInit } from '@angular/core';
import { Film } from '../interfaces/film';
import {FilmService} from '../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  

  filmList: Array<Film>;
  loading: boolean;


  constructor(
    private filmService: FilmService
  ) { 

  }


  ngOnInit(): void {
    this.loading = true;
    this.getFilmList();
  
  }

  
  async getFilmList(){
    this.filmService.getFilms().subscribe( result => {
      this.filmList = result.results;
      this.loading = false;
    });
  }

}
