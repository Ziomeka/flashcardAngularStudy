import { Component, OnInit, Input } from '@angular/core';
import { Flashcard } from '../../models/Flashcard';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {
  @Input() card:Flashcard;
  isFlipped:Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  setFlippedClass() {
    return { 'card--flipped': this.isFlipped };
  }

}
