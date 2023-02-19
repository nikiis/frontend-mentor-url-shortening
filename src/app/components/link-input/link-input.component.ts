import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { LinkData } from 'src/app/interfaces';

@Component({
  selector: 'app-link-input',
  templateUrl: './link-input.component.html',
  styleUrls: ['./link-input.component.scss'],
})
export class LinkInputComponent {
  @Output() getLink: EventEmitter<LinkData> = new EventEmitter();

  isEmpty = false;
  isUrlValid = true;
  urlData: any;

  constructor(private appService: AppService) {}

  checkIsInputEmpty = (value: string) => {
    return value === '' && value.length === 0;
  };

  checkIsUrlValid = (value: string) => {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(value);
  };

  onSubmit = (f: NgForm) => {
    if (this.checkIsInputEmpty(f.value.linkInput)) {
      this.isEmpty = true;
      return;
    }
    this.isEmpty = false;

    if (!this.checkIsUrlValid(f.value.linkInput)) {
      this.isUrlValid = false;
      return;
    }
    this.isUrlValid = true;

    this.appService.getShortLink(f.value.linkInput).subscribe((data) => {
      this.urlData = data;
      console.log(this.urlData.result);

      if (!this.urlData.ok) return;
      this.getLink.emit({
        shortLink: this.urlData.result.short_link,
        longLink: this.urlData.result.original_link,
      });
    });
  };
}
