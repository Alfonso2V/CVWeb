import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';

const routes: Routes = [
  {
    path: '',
    component: ContactPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContacRoutingModule { }
