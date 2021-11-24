import { Component, OnInit } from '@angular/core';
import * as dataRaw from '@data/projects.json';

@Component({
  selector: 'app-folder-pages',
  templateUrl: './folder-pages.component.html',
  styleUrls: ['./folder-pages.component.css']
})
export class FolderPagesComponent implements OnInit {
  data: Array<any> = []
  constructor() { }

  ngOnInit(): void {
    const aux = dataRaw
    this.data = aux.data
  }
  goToApp(url: string): void {
    window.open(url, "_blank")
  }

}