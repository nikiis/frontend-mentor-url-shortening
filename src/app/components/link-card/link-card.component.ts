import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss'],
})
export class LinkCardComponent {
  @Input() longLink = '';
  @Input() shortLink = '';

  buttonLabel = 'Copy';
  isBtnDisabled = false;

  copyText = () => {
    navigator.clipboard.writeText(this.shortLink);
    this.buttonLabel = 'Copied';
    this.isBtnDisabled = true;

    setTimeout(() => {
      this.buttonLabel = 'Copy';
      this.isBtnDisabled = false;
    }, 2000);
  };
}
