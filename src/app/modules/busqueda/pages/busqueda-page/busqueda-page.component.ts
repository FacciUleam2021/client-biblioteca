
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BusquedaService } from '@modules/busqueda/services/busqueda.service';

@Component({
  selector: 'app-busqueda-page',
  templateUrl: './busqueda-page.component.html',
  styleUrls: ['./busqueda-page.component.css']
})
export class BusquedaPageComponent implements OnInit {
  listaLIbros: any = [];
  listaLIbros2: any = [];
  src: string = ''
  src2: string = ''
  src3: string = ''
  @Output() callbackData: EventEmitter<any> = new EventEmitter()
  constructor(private libroService: BusquedaService,  private router: Router) { }

  ngOnInit(): void {
    this.loadDataAll();
  }
  async loadDataAll(): Promise<any> {
    this.listaLIbros2 = await this.libroService.getDataLibro().toPromise();
    console.log(this.listaLIbros2)
  }
  callSearch(nombre: string): void {
    if (nombre.length >= 2) {
      this.src2='';
      this.src3='';
      this.listaLIbros = this.listaLIbros2.filter((item:any) => {
        return item.name.toLowerCase().includes(nombre.toLowerCase());
      });
    }
  }
  callSearchAutor(autor: string): void {
    if (autor.length >= 2) {
      this.src='';
      this.src3='';
      this.listaLIbros = this.listaLIbros2.filter((item:any) => {
        return item.lastname.toLowerCase().includes(autor.toLowerCase());
      });
    }
  }
  callSearchCategory(cat: string): void {
    if (cat.length >= 2) {
      this.src='';
      this.src2='';
      this.listaLIbros = this.listaLIbros2.filter((item:any) => {
        return item.names.toLowerCase().includes(cat.toLowerCase());
      });
    }
  }
  nextTo(id: string){
    //this.router.navigate(['/', 'detalle'])
    this.router.navigate(['/', 'detalle'], { queryParams: { id: id } });
  }
}
