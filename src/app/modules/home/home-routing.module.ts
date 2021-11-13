import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('../contact/contac.module').then(m => m.ContacModule)
  },
  {
    path: 'folder',
    loadChildren: () => import('../folder/folder.module').then(m => m.FolderModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('../skills/skills.module').then(m => m.SkillsModule)
  },
  {
    path: '**',
    redirectTo: 'profile'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
