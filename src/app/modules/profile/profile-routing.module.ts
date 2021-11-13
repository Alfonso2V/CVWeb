import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePagesComponent } from './pages/profile-pages/profile-pages.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
