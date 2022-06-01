import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  DocsComponent,
  ExemplesComponent,
  HomeComponent,
  SupportPageComponent,
} from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'doc', component: DocsComponent },
  { path: 'exemples', component: ExemplesComponent },
  { path: 'support', component: SupportPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
