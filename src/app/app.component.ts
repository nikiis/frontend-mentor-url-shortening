import { Component } from '@angular/core';
import { LinkData } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-mentor-url-shortening';
  recentLinks: Array<LinkData> = [];

  addLinkData = (link: LinkData) => {
    if (this.recentLinks.length >= 5) this.recentLinks.shift();
    this.recentLinks = [...this.recentLinks, link];
  };
}
