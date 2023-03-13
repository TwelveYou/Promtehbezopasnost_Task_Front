import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmcardComponent } from './filmcard.component';

describe('FilmcardComponent', () => {
  let component: FilmcardComponent;
  let fixture: ComponentFixture<FilmcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
