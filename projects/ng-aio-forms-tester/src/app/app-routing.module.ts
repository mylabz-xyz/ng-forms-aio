import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgAioTestComponent } from './components/ng-aio-test/ng-aio-test.component';

const routes: Routes = [{ path: '', component: NgAioTestComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
