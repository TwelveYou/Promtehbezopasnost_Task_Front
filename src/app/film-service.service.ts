import { Injectable } from '@angular/core';
import * as jsonData from '../assets/data.json';
// import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  films : any;
  best_film : any = null;

  public getOneFilm(id:number){
    return this.films[id];
  }

  public getFilms(){    
    return this.films;
  }

  public makeFilmBest(id : number){    
    let list_films : any = this.getFilms();
    for (let film in list_films) {         
      // Тут задается лучший фильм
      if(list_films[film].id == id){
        this.best_film = list_films[film];
        console.log(this.best_film); // --------------------------------
        return this.best_film
      }
    }
    return null
  }

  public deleteBestFilm(){    
    this.best_film = null;
  }

  constructor() { 
    this.films = jsonData;
  }
}
