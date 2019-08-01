import { Gif } from './gif.interface';
import { GiphyService } from './giphy.service';
import { searchGif } from './search-gif.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss'],
})
export class GiphyComponent implements OnInit{
  image$: Observable<string>;

  constructor(private giphyService: GiphyService) { }

  getRandomGif() {
    this.image$ = this.giphyService.getRandomGif();
  }

  ngOnInit() {
    this.getRandomGif();
  }

  findGif(name: string) {
    this.image$ = this.giphyService.findGif(name);
  }
}
