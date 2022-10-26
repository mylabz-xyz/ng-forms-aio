import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  ComponentsComponent,
  DocsComponent,
  ExemplesComponent,
  HomeComponent,
  SupportPageComponent
} from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'doc', component: DocsComponent },
  { path: 'doc/:id', component: DocsComponent },
  { path: 'components/:id', component: ComponentsComponent },
  { path: 'exemples', component: ExemplesComponent },
  { path: 'support', component: SupportPageComponent },
  { path: 'components', component: ComponentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
