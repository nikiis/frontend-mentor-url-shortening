import { Component, Input } from '@angular/core';
import { StatCardDetail } from 'src/app/interfaces';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent {
  @Input() details: StatCardDetail | undefined;
}
