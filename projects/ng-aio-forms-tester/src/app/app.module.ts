import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgAioFormsModule } from 'projects/ng-aio-forms/src/lib/ng-aio-forms.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgAioTestComponent } from './components/ng-aio-test/ng-aio-test.component';

@NgModule({
  declarations: [AppComponent, NgAioTestComponent],
  imports: [BrowserModule, AppRoutingModule, NgAioFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
