import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AditorialRoutingModule } from './aditorial-routing.module';
import { AditorialPageComponent } from './pages/aditorial-page/aditorial-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AditorialPageComponent
  ],
  imports: [
    CommonModule,
    AditorialRoutingModule,
    ReactiveFormsModule
  ]
})
export class AditorialModule { }
