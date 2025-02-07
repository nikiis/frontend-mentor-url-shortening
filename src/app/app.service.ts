import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  rootURL = 'https://cleanuri.com/api/v1/shorten';

  getShortLink(longLink: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = `url=${encodeURIComponent(longLink)}`;

    return this.http.post(this.rootURL, body, {headers});
  }
}
