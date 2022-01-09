import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosPageComponent } from './pages/libros-page/libros-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LibrosPageComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule
  ]
})
export class LibrosModule { }
