import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardsComponent } from './flashcards.component';
import { FlashcardComponent } from '../flashcard/flashcard.component';
import { FlashcardsControlsComponent } from '../flashcards-controls/flashcards-controls.component';

describe('FlashcardsComponent', () => {
  let component: FlashcardsComponent;
  let fixture: ComponentFixture<FlashcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardsComponent, FlashcardComponent, FlashcardsControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
