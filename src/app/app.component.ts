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
    console.log(svc.getFilms());
    for (let film in svc.getFilms()) {   
      if(svc.getFilms()[film].name != null)   
      this.films.push(svc.getFilms()[film]);
    }
  }
}