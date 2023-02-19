import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-purple-bg-container',
  templateUrl: './purple-bg-container.component.html',
  styleUrls: ['./purple-bg-container.component.scss'],
})
export class PurpleBgContainerComponent {
  @Input() addBorderRadius = false;
}
