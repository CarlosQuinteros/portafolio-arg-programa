import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSekeletonComponent } from './card-sekeleton.component';

describe('CardSekeletonComponent', () => {
  let component: CardSekeletonComponent;
  let fixture: ComponentFixture<CardSekeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSekeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSekeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
