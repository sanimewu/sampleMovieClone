import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMovieListsComponent } from './all-movie-lists.component';

describe('AllMovieListsComponent', () => {
  let component: AllMovieListsComponent;
  let fixture: ComponentFixture<AllMovieListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllMovieListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMovieListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
