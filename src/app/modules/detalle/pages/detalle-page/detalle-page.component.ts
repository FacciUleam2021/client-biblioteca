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
  data: any = {};
  ifloaded = false;
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
    });
  }
  regresar(){
    this._location.back();
  }
}
