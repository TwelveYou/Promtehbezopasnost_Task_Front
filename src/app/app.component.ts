import { Component } from '@angular/core';
import { Input} from '@angular/core';
import { FilmServiceService } from './film-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  films : any[] = [];
  tests: string[] = ['Иван', 'Евгений'];

  constructor (svc: FilmServiceService){
    let list_films : any = svc.getFilms();
    console.log(list_films);
    for (let film in list_films) {   
      if(list_films[film].name != null)   
      this.films.push(list_films[film]);
    }
  }
}