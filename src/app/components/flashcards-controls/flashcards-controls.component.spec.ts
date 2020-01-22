import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsControlsComponent } from './flashcards-controls.component';

describe('FlashcardsControlsComponent', () => {
  let component: FlashcardsControlsComponent;
  let fixture: ComponentFixture<FlashcardsControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardsControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardsControlsComponent);
    component = fixture.componentInstance;
    component.deck = {
      currentIndex: 0,
      deckLength: 1,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
