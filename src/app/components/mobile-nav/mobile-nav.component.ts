import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent implements AfterViewInit {
  @ViewChildren('mobileMenuBtn, mobileMenuNav, html') elements:
    | QueryList<ElementRef>
    | undefined;
  mobileMenuBtn: ElementRef | undefined;
  mobileMenuNav: ElementRef | undefined;
  isMobileMenuOpen = false;

  ngAfterViewInit(): void {
    this.mobileMenuBtn = this.elements?.first;
    this.mobileMenuNav = this.elements?.last;
  }

  openMobileMenu = () => {
    console.log(this.elements);
    if (this.isMobileMenuOpen) {
      this.mobileMenuBtn?.nativeElement.classList.remove('active');
      this.mobileMenuNav?.nativeElement.classList.remove('active');
    } else {
      this.mobileMenuBtn?.nativeElement.classList.add('active');
      this.mobileMenuNav?.nativeElement.classList.add('active');
    }

    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  };
}
