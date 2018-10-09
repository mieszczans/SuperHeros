import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  baseEndpoint = 'https://gateway.marvel.com/';
  constructor(public http: HttpClient) { }

  getListOfHeroes(heroName: string): Observable<Hero[]> {
    const searchParam = heroName.trim();
    const options = searchParam ? { params: new HttpParams()
    .set('nameStartsWith', searchParam)
    .set('apikey', '287366e056b8c94a88722b4ce1924d6c')
    .set('ts', '1')
    .set('hash', '42bc11e2c707871918fc68f843708d7f')} : {};
    return this.http.get<any[]>(`${this.baseEndpoint}v1/public/characters`, options)
    .pipe(
      map(data => {
        return data['data'].results;
      }),
      catchError(err => of(err.message))
    );
  }
}
