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

  public makeFilmBest(id : number){    
    this.best_film = id;
  }

  public deleteBestFilm(){    
    this.best_film = null;
  }

  constructor() { 
    this.films = jsonData;
  }
}
