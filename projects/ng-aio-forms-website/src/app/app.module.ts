import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
  SupportComponent,
} from './components';

import {
  AboutComponent as AboutComponentPage,
  DocsComponent as DocsComponentPage,
  ExemplesComponent as ExemplesComponentPage,
  HomeComponent as HomeComponentPage,
  SupportPageComponent,
} from './pages';

import { BackgroundProvider } from './providers';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgAioFormsModule } from 'projects/ng-aio-forms/src/lib/ng-aio-forms.module';


registerLocaleData(en);

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
    AboutComponentPage,
    DocsComponentPage,
    ExemplesComponentPage,
    HomeComponentPage,
    SupportComponent,
    SupportPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzButtonModule,
    NzLayoutModule,
    NgAioFormsModule
  ],
  providers: [BackgroundProvider, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
