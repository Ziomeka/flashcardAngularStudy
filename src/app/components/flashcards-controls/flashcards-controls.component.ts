import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Deck } from '../../models/Deck';

@Component({
  selector: 'app-flashcards-controls',
  templateUrl: './flashcards-controls.component.html',
  styleUrls: ['./flashcards-controls.component.scss']
})
export class FlashcardsControlsComponent implements OnInit {
  @Input() deck:Deck;
  @Output() index = new EventEmitter<Number>();
  constructor() { }

  ngOnInit() {
  }

  sendIndex() {
    this.index.emit(1);
  }

}
