import { Injectable } from '@angular/core';
import * as jsonData from '../assets/data.json';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  films : any;
  best_film : number | null = null;

  public getOneFilm(id:number){
    return this.films[id];
  }

  public getFilms(){    
    return this.films;
  }

  // public getGenreNames(ids_genre:any[]): string{
  //   let genres_list : string[] = [
  //     "—",
  //     "драма",
  //     "биография",
  //     "история",
  //     "фэнтези",
  //     "приключения",
  //     "боевик",
  //     "мультфильм",
  //     "комедия",
  //     "триллер",
  //     "детектив",
  //     "фантастика"
  //   ];

  //   return ids_genre.map((id : any) => genres_list[id]).join(', ');
  // }

  constructor() { 
    this.films = jsonData;
  }
}
