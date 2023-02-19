import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss'],
})
export class RoundButtonComponent {
  @Input() label = '';
  @Input() width = '';
  @Output() onClick: EventEmitter<Event> = new EventEmitter();

  onButtonClick(value: Event) {
    this.onClick.emit(value);
  }
}
