import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  optionsBar: String = '';
  optionsAvatar: String = '';
  optionsFullName: String = ''
  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    const info = JSON.parse(localStorage.getItem('data-person')!);
    if (info) {
      this.optionsBar = info.role;
      this.optionsAvatar = info.img;
      this.optionsFullName = info.nombre;
     
    }
    
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'tracks']
      },
      {
        name: 'Buscar libro',
        icon: 'uil uil-search',
        router: ['/', 'busqueda']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      },
      {
        name: 'Perfil',
        icon: 'uil-user',
        router: ['/', 'perfil']
      },
      {
        name: 'Cerrar sesión',
        icon: 'uil-toggle-off',
        router: ['/', 'auth']
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Autores',
        icon: 'uil-plus-square',
        router: ['/', 'autores'],
      },
      {
        name: 'Categorias',
        icon: 'uil-plus-square',
        router: ['/', 'categorias'],//
      },
      {
        name: 'Editorial',
        icon: 'uil-plus-square',
        router: ['/', 'editorial'],//
      },
      {
        name: 'Crear libro',
        icon: 'uil-heart-medical',
        router: ['/', 'libros'],//
      },
      {
        name: 'Lista de Usuarios',
        icon: 'uil-user-arrows'
      },
      
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      },
      {
        name: 'Mi lista º5',
        router: ['/']
      }
    ]

  }

  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }
}
