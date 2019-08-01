import { Gif } from './gif.interface';
import { searchGif } from './search-gif.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, find, map, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  baseUrl = 'https://api.giphy.com/v1/';
  apiKey = '?api_key=9x0maaN6nQcvfQPeT2wq6UXL6pGEuIjn';
  searchUrl = `${this.baseUrl}gifs/search${this.apiKey}`;
  randomeGifUrl = `${this.baseUrl}gifs/random${this.apiKey}`;

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getRandomGif(): Observable<string> {
    return this.http.get<Gif>(this.randomeGifUrl).pipe(pluck('data', 'image_original_url'));
  }

  findGif(name: string): Observable<string> {
    const url = `${this.searchUrl}&q=${name}`;
    return this.http.get<searchGif>(url).pipe(
      filter((gif) => gif.data.length > 0),
      map(this.imageMap),
      pluck('images', 'original', 'url'),
    );
  }

  imageMap = (gif) => {
    const randomIndex = Math.floor(Math.random() * gif.data.length + 1);
    return gif.data[randomIndex];
  };
}
