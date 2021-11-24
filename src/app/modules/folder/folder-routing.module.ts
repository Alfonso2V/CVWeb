import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolderModule } from './folder.module';
import { FolderPagesComponent } from './pages/folder-pages/folder-pages.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FolderRoutingModule { }
