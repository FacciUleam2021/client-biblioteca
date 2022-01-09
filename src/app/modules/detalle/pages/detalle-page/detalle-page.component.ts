import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleService } from '@modules/detalle/services/detalle.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-detalle-page',
  templateUrl: './detalle-page.component.html',
  styleUrls: ['./detalle-page.component.css'],
})
export class DetallePageComponent implements OnInit {
  order: any = [];
  arrays: any = [];
  data: any = {};
  ifloaded = false;
  ifloaded2 = false;
  stringRealcionados= "";
  constructor(
    private libroService: DetalleService,
    private route: ActivatedRoute, private router: Router, private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.order = { params };
    });
    this.route.queryParams.subscribe((params) => {
      this.order = params['id'];
    });
    if (this.order) {
      this.receiveData(this.order);
    }
   
  }
  receiveData(id: string) {
    this.libroService.getLibroById(id).subscribe((res) => {
      this.data = res;
      this.ifloaded = true;
      this.stringRealcionados = res.fkrelacionados;
      console.log(this.stringRealcionados)
      this.createLibRelacionados(this.stringRealcionados)
    });
    
  }
  createLibRelacionados(cadena: string){
      if (cadena) {
          var arreglo = cadena.split(',');
          if (arreglo.length >0) {
            
            for (var i = 0; i < arreglo.length; i++){
              this.libroService.getLibroById(arreglo[i]).subscribe((res) => {
                this.arrays.push({id: res.id, name: res.name, names: res.names, link: res.link, documento: res.document});
               
              });
            }
            console.log(this.arrays)
            this.ifloaded2 = true;
          }
         
      }
  }
  regresar(){
    this._location.back();
  }
}
