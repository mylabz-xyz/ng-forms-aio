import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AboutComponent,
  BackgroundComponent,
  ContactComponent,
  DocsComponent,
  ExemplesComponent,
  FooterComponent,
  HeaderComponent,
} from './components';
import { BackgroundProvider } from './providers';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BackgroundComponent,
    ContactComponent,
    DocsComponent,
    ExemplesComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BackgroundProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
