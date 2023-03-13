import { Component, Input } from '@angular/core';
import { FilmServiceService } from '../film-service.service';

@Component({
  selector: 'app-filmcard',
  templateUrl: './filmcard.component.html',
  styleUrls: ['./filmcard.component.scss']
})
export class FilmcardComponent {
  @Input() film: any

  public getGenreNames(ids_genre:any[]){
    let genres_list : string[] = [
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
    return ids_genre.map((id : any) => genres_list[id]).join(', ');
  }
}
