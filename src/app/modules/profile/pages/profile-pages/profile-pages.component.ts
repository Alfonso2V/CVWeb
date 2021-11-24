import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-pages',
  templateUrl: './profile-pages.component.html',
  styleUrls: ['./profile-pages.component.css']
})
export class ProfilePagesComponent implements OnInit {

  edad: number = 0

  constructor() { }

  ngOnInit(): void {
    this.edad = this.calculeAge()
  }
  downloadFile(): void {
    window.open("../../../../../assets/Rodrigo Alfonso Verastegui García.pdf", "_blank")
  }
  calculeAge(): number {
    let edadActual = 24
    let anioActual = 2021
    let date: Date = new Date();
    const mes = date.getMonth();
    const anio = date.getUTCFullYear();

    anioActual -= anio
    edadActual += anioActual
    if (mes >= 12)
      edadActual += 1
    return edadActual
  }
}
