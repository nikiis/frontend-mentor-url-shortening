import { Component } from '@angular/core';
import { StatCardDetail } from 'src/app/interfaces';

@Component({
  selector: 'app-stat-section',
  templateUrl: './stat-section.component.html',
  styleUrls: ['./stat-section.component.scss'],
})
export class StatSectionComponent {
  statDetails: Array<StatCardDetail> = [
    {
      iconSrc: '/assets/images/icon-brand-recognition.svg',
      title: 'Brand Recognition',
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
    },
    {
      iconSrc: '/assets/images/icon-detailed-records.svg',
      title: 'Detailed Records',
      description:
        'Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    },
    {
      iconSrc: '/assets/images/icon-fully-customizable.svg',
      title: 'Fully Customizable',
      description:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    },
  ];
}
