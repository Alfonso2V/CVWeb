import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  menuOptions: Array<any> = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuOptions = [
      {
        name: 'Perfil',
        router: ['/', 'profile']
      },
      {
        name: 'Habilidades y conocimientos',
        router: ['/', 'skills']
      },
      {
        name: 'Portafolio',
        router: ['/', 'folder']
      },
      {
        name: 'Contacto',
        router: ['/', 'contact']
      }
    ]
  }

}
