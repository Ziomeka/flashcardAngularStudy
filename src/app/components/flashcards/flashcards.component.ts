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
        question: 'Question 1?',
        answer: 'Answer 1!'
      },
      {
        id: 3,
        question: 'Question 2?',
        answer: 'Answer 2!'
      },
      {
        id: 3,
        question: 'Question 3?',
        answer: 'Answer 3!'
      },
      {
        id: 4,
        question: 'Question 4?',
        answer: 'Answer 4!'
      },
      {
        id: 5,
        question: 'Question 5?',
        answer: 'Answer 5!'
      },
      {
        id: 6,
        question: 'Question 6?',
        answer: 'Answer 6!'
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
