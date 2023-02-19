import { Component, Input } from '@angular/core';
import { SocialLink } from 'src/app/interfaces';

@Component({
  selector: 'app-social-icons-list',
  templateUrl: './social-icons-list.component.html',
  styleUrls: ['./social-icons-list.component.scss'],
})
export class SocialIconsListComponent {
  @Input() socialLinks: Array<SocialLink> = [];
}
