import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http: HttpClient) {

   }
   url = 'https://api.chucknorris.io/jokes/random';
   getData() {
      return this.http.get(this.url);
   }
}
