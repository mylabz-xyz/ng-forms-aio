import { HttpClient, HttpClientModule } from '@angular/common/http';

import {  HashLocationStrategy, LocationStrategy, PathLocationStrategy, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, SecurityContext } from '@angular/core';
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
  JsonExempleComponent,
  IntroComponent,
  ZorroDropdownComponent,
  VersionComponent,
  FeaturesComponent,
  ComponentsComponent
} from './components';

import { AbstractWithForm } from './abstract';

import {
  AboutComponent as AboutComponentPage,
  DocsComponent as DocsComponentPage,
  ExemplesComponent as ExemplesComponentPage,
  HomeComponent as HomeComponentPage,
  SupportPageComponent,
  ComponentsComponent as ComponentsPageComponent
} from './pages';

import { BackgroundProvider, AnimatedFormProvider, AnimatedIcon, MarkdownProvider } from './providers';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { NzAffixModule } from 'ng-zorro-antd/affix';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { NgFormsAioModule } from 'projects/ng-forms-aio/src/lib/ng-forms-aio.module';
import { MarkdownModule } from 'ngx-markdown';

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
    JsonExempleComponent,
    SupportComponent,
    IntroComponent,
    SupportPageComponent,
    ZorroDropdownComponent,
    VersionComponent,
    AbstractWithForm,
    FeaturesComponent,
    ComponentsComponent,
    ComponentsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzButtonModule,
    NzMenuModule,
    NzAffixModule,
    NzDropDownModule,
    NzTypographyModule,
    NzLayoutModule,
    NzDividerModule,
    NgFormsAioModule.forRoot({ theme: 'background-edges-to-center' }),
    CodemirrorModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    })
  ],
  providers: [
    BackgroundProvider,
    AnimatedFormProvider,
    AnimatedIcon,
    AnimatedFormProvider,
    MarkdownProvider,
    { provide: NZ_I18N, useValue: en_US },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
