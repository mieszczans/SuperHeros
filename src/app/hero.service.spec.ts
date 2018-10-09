import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HeroService]
  }));

  it(`should create`, async(inject([HttpTestingController, HeroService],
    (httpClient: HttpTestingController, heroService: HeroService) => {
      expect(HeroService).toBeTruthy();
  })));
});
