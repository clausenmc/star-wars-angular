import { Component, OnInit, Input} from '@angular/core';
import { Starships } from '../interfaces/starships';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  @Input() childrenItem: string;
  starship : Starships;
  loading : boolean;

  constructor(
    private filmService : FilmService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    let temp = this.childrenItem.split('/');

    this.getStarShip(temp[temp.length-2]);
  }

  getStarShip (id) {
    this.filmService.getStarships(id).subscribe(starship => {
      this.starship = starship
      this.loading = false
    })


  }

}
