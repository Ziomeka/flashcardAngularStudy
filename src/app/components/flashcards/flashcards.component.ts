import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../../models/Flashcard';
import { Deck } from '../../models/Deck';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss']
})
export class FlashcardsComponent implements OnInit {
  flashcards:Flashcard[];
  deck:Deck;
  constructor() { }

  ngOnInit() {
    this.flashcards = [
      {
        id: 1,
        question: 'How are you?',
        answer: 'Fine, thank you!'
      },
      {
        id: 2,
        question: 'How do you do?',
        answer: 'How do you do?'
      },
    ];
    this.deck = {
      currentIndex: 0,
      deckLength: this.flashcards.length,
    }
  }

  setCurrentIndex(index) {
    this.deck.currentIndex = index;
  }

}
