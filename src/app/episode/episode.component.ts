import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../interfaces/film';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  film : Film;
  loading : boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FilmService
  ) { }

  ngOnInit() {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.getFilm(id);
    
  }

  async getFilm(id ){
    console.log('method ' + id)
    this.service.getFilm(id).subscribe(film => {
      console.log(film)
      this.film = film;
      this.loading = false
      console.log(this.loading)
    })
  }
}
