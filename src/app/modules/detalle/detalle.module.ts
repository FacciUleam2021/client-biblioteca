import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { DetallePageComponent } from './pages/detalle-page/detalle-page.component';


@NgModule({
  declarations: [
    DetallePageComponent
  ],
  imports: [
    CommonModule,
    DetalleRoutingModule
  ]
})
export class DetalleModule { }
