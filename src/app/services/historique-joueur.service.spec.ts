import { TestBed } from '@angular/core/testing';

import { HistoriqueJoueurService } from './historique-joueur.service';

describe('HistoriqueJoueurService', () => {
  let service: HistoriqueJoueurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriqueJoueurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
