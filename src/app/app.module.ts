import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashcardsComponent } from './components/flashcards/flashcards.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { FlashcardsControlsComponent } from './components/flashcards-controls/flashcards-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashcardsComponent,
    FlashcardComponent,
    FlashcardsControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
