import { GiphyComponent } from './giphy.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [GiphyComponent],
  exports: [GiphyComponent],
  imports: [CommonModule]
})
export class GiphyModule {
}
