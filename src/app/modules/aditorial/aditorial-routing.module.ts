import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AditorialPageComponent} from './pages/aditorial-page/aditorial-page.component';

const routes: Routes = [
  {
    path: '',
    component: AditorialPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AditorialRoutingModule { }
