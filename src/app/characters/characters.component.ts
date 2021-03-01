import { Component, Input, OnInit } from '@angular/core';
import { Characters } from '../interfaces/characters';
import { FilmService } from '../services/film.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  @Input() childrenItem: string;
  character : Characters;
  loading : boolean;

  constructor(
    private filmService : FilmService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    let temp = this.childrenItem.split('/');

    this.getCharacter(temp[temp.length-2 ]);
  }

  getCharacter(id) {
    this.filmService.getCharacters(id).subscribe(character => {
      this.character = character
      this.loading = false
    })
  }


}
