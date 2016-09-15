import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // Sets 2 second delay
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(HEROES);
      }, 2000);
    });
  }
}
