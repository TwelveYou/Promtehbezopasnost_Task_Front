import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilmServiceService } from '../film-service.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-filmcard',
  templateUrl: './filmcard.component.html',
  styleUrls: ['./filmcard.component.scss']
})
export class FilmcardComponent {
  @Input() film: any;
  @Output() outChoseBestFilm = new EventEmitter<any>();

  public choseBestFilm(id : any){
    this.appCom.best_film = this.srv.makeFilmBest(id);
  }

  public isBestFilm(id: any){
    if (this.srv.best_film.id == id){
      return true
    } else return false
  } 

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

  constructor(private srv: FilmServiceService, private appCom: AppComponent){  }
}
