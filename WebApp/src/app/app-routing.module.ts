import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandedPageComponent } from './landed-page/landed-page.component';

const routes: Routes = [
  {path:'', component:LandedPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
