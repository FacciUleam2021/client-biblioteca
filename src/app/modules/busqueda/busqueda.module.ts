import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaPageComponent } from './pages/busqueda-page/busqueda-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BusquedaPageComponent
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule,
    FormsModule
  ]
})
export class BusquedaModule { }
