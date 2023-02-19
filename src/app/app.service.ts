import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  rootURL = 'https://api.shrtco.de/v2/';

  getShortLink(longLink: string) {
    return this.http.get(this.rootURL + 'shorten?url=' + longLink);
  }
}
