import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestScreenComponent } from './test-screen/test-screen.component';

const routes: Routes = [
  { path: 'screenTest', component: TestScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
