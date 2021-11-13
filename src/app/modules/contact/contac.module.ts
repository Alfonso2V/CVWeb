import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContacRoutingModule } from './contac-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    ContactPagesComponent
  ],
  imports: [
    CommonModule,
    ContacRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ContacModule { }
