import { Component, Input } from '@angular/core';
import { FilmServiceService } from '../film-service.service';

@Component({
  selector: 'app-filmcard',
  templateUrl: './filmcard.component.html',
  styleUrls: ['./filmcard.component.scss']
})
export class FilmcardComponent {
  @Input() test: any
  genres_list : string[] = [
    "—",
    "драма",
    "биография",
    "история",
    "фэнтези",
    "приключения",
    "боевик",
    "мультфильм",
    "комедия",
    "триллер",
    "детектив",
    "фантастика"
  ];

  film : any;

  img_link : string = '';
  name : string = '';
  year : string = '';
  genres : string = '';
  

  constructor (svc: FilmServiceService){
    this.film = svc.getOneFilm(0);
    this.name = this.film['name'];
    this.year = String(this.film['year']);
    this.img_link = '../../assets/images/' + String(this.film['id']) + '.jpeg';
    this.genres = this.film['genre'].map((id_genre : any) => this.genres_list[id_genre]).join(', ');
  }
}
