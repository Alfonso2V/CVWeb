import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FolderRoutingModule } from './folder-routing.module';
import { FolderPagesComponent } from './pages/folder-pages/folder-pages.component';


@NgModule({
  declarations: [
    FolderPagesComponent
  ],
  imports: [
    CommonModule,
    FolderRoutingModule
  ]
})
export class FolderModule { }
