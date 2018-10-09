import { HeroService } from './hero.service';
import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'superhero';
  heroList: Hero[];
  constructor(private heroService: HeroService) {}

  searchHero(searchText: string) {
    this.heroService.getListOfHeroes(searchText)
    .subscribe(
      (heroList) => {
        this.heroList = heroList;
      }
    );
  }
}
