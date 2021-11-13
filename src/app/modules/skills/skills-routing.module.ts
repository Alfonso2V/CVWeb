import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsPagesComponent } from './pages/skills-pages/skills-pages.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
