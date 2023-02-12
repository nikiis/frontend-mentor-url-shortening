import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { LinkCardComponent } from './components/link-card/link-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, RoundButtonComponent, PrimaryButtonComponent, LinkCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
