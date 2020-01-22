import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../../models/Flashcard';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss']
})
export class FlashcardsComponent implements OnInit {
  flashcards:Flashcard[];
  index:Number = 0;
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
  }

}
