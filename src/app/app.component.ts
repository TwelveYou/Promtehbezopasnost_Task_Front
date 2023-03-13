import { Component } from '@angular/core';
import { FilmServiceService } from './film-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  films : any[] = [];
  best_film : any = this.svc.best_film;

  constructor (private svc: FilmServiceService){
    let list_films : any = svc.getFilms();
    for (let film in list_films) {   
      if(list_films[film].name != null)   
      this.films.push(list_films[film]);
    }
  }
}