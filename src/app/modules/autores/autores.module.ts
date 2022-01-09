import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresPageComponent } from './pages/autores-page/autores-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AutoresPageComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    ReactiveFormsModule
  ]
})
export class AutoresModule { }
