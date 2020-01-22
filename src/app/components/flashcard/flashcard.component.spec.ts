import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardComponent } from './flashcard.component';

describe('FlashcardComponent', () => {
  let component: FlashcardComponent;
  let fixture: ComponentFixture<FlashcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardComponent);
    component = fixture.componentInstance;
    component.card = {
      id: 1,
      question: 'a?',
      answer: 'b'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
