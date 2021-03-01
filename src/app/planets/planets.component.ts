import { Component, OnInit, Input } from '@angular/core';
import { Planets } from '../interfaces/planets';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  @Input() childrenItem: string;
  planet : Planets;
  loading : boolean;

  constructor(
    private filmService : FilmService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    let temp = this.childrenItem.split('/');

    this.getPlanet(temp[temp.length-2]);
  }

  getPlanet(id) {
    this.filmService.getPlanets(id).subscribe(planet => {
      this.planet = planet
      this.loading = false
    })
  }

}
