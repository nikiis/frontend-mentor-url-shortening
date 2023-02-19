import { Component } from '@angular/core';
import { FooterColumn, SocialLink } from 'src/app/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  socialLinks: Array<SocialLink> = [
    {
      icon: 'icon-facebook',
      name: 'Facebook',
      url: '#',
    },
    {
      icon: 'icon-twitter',
      name: 'Twitter',
      url: '#',
    },
    {
      icon: 'icon-pintrest',
      name: 'Pintrest',
      url: '#',
    },
    {
      icon: 'icon-instagram',
      name: 'Instagram',
      url: '#',
    },
  ];

  footerColumns: Array<FooterColumn> = [
    {
      featureLink: { name: 'Features', url: '#' },
      subLinks: [
        {
          name: 'Link Shortening',
          url: '#',
        },
        {
          name: 'Branded Links',
          url: '#',
        },
        {
          name: 'Analytics',
          url: '#',
        },
      ],
    },
    {
      featureLink: { name: 'Resources', url: '#' },
      subLinks: [
        {
          name: 'Blog',
          url: '#',
        },
        {
          name: 'Developers',
          url: '#',
        },
        {
          name: 'Support',
          url: '#',
        },
      ],
    },
    {
      featureLink: { name: 'Company', url: '#' },
      subLinks: [
        {
          name: 'About',
          url: '#',
        },
        {
          name: 'Our Team',
          url: '#',
        },
        {
          name: 'Careers',
          url: '#',
        },
        {
          name: 'Contact',
          url: '#',
        },
      ],
    },
  ];
}
