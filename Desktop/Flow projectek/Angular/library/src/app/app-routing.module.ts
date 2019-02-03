import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewBookComponent } from './modules/new-book/new-book.component';

const routes: Routes = [
  { path: 'newbook', component: NewBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
