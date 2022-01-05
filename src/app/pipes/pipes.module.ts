// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { SafePipe } from './safe.pipe';
import { InitialLetterPipe } from './initial-letter.pipe';


@NgModule({
  declarations: [
    SafePipe,
    InitialLetterPipe
  ],
  exports: [
    SafePipe,
    InitialLetterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
