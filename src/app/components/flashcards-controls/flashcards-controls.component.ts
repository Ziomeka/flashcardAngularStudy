import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Deck } from '../../models/Deck';

@Component({
  selector: 'app-flashcards-controls',
  templateUrl: './flashcards-controls.component.html',
  styleUrls: ['./flashcards-controls.component.scss']
})
export class FlashcardsControlsComponent implements OnInit {
  @Input() deck:Deck;
  @Output() currentIndex = new EventEmitter<Number>();
  index:number;
  showPrev:boolean;
  showNext:boolean;
  showReset:boolean;
  constructor() { }

  ngOnInit() {
    this.index = this.deck.currentIndex;
    this.setButtons();
  }

  prev() {
    this.index --;
    this.update();
  }
  next() {
    this.index ++;
    this.update();
  }
  reset() {
    this.index = 0;
    this.update();
  }

  setButtons() {
    this.showPrev = (this.index > 0);
    this.showNext = (this.index < this.deck.deckLength - 1);
    this.showReset = (this.index === this.deck.deckLength - 1);
  }

  update() {
    this.setButtons();
    this.currentIndex.emit(this.index);
  }

}
