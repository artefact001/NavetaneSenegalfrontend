import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionEquipeComponent } from './competition-equipe.component';

describe('CompetitionEquipeComponent', () => {
  let component: CompetitionEquipeComponent;
  let fixture: ComponentFixture<CompetitionEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionEquipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
