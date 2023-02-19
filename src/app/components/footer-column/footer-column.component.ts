import { Component, Input } from '@angular/core';
import { FooterColumn } from 'src/app/interfaces';

@Component({
  selector: 'app-footer-column',
  templateUrl: './footer-column.component.html',
  styleUrls: ['./footer-column.component.scss'],
})
export class FooterColumnComponent {
  @Input() footerColumn: FooterColumn | undefined;
}
