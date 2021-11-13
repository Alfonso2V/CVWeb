import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsPagesComponent } from './pages/skills-pages/skills-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SkillsPagesComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    SharedModule
  ]
})
export class SkillsModule { }
