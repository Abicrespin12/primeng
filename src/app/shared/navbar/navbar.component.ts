import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        url:'inicio'
      },
      {
        label: 'Historia',
        icon: 'pi pi-fw pi-book',
        url:'historia'
      },
      {
        label: 'Eventos',
        icon: 'pi pi-fw pi-star',
        url:'eventos'
      },
      {
        label: 'Clases',
        icon: 'pi pi-fw pi-users',
        url:'clases'
      },
      {
        label: 'Contacto',
        icon: 'pi pi-fw pi-user',
        url:'contacto'
      }
    ];
  }
  items: MenuItem[] =[];
}
