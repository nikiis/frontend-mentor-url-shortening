import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent {
  @Input() label = '';
  @Input() isDisabled = false;
  @Output() onClick: EventEmitter<Event> = new EventEmitter();

  onButtonClick(value: Event) {
    this.onClick.emit(value);
  }
}
