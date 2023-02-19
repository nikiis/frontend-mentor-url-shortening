import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { LinkCardComponent } from './components/link-card/link-card.component';
import { PurpleBgContainerComponent } from './components/purple-bg-container/purple-bg-container.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { LinkInputComponent } from './components/link-input/link-input.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { StatSectionComponent } from './components/stat-section/stat-section.component';
import { SectionCtaComponent } from './components/section-cta/section-cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialIconsListComponent } from './components/social-icons-list/social-icons-list.component';
import { FooterColumnComponent } from './components/footer-column/footer-column.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoundButtonComponent,
    PrimaryButtonComponent,
    LinkCardComponent,
    PurpleBgContainerComponent,
    MobileNavComponent,
    HeroSectionComponent,
    LinkInputComponent,
    StatCardComponent,
    StatSectionComponent,
    SectionCtaComponent,
    FooterComponent,
    SocialIconsListComponent,
    FooterColumnComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
