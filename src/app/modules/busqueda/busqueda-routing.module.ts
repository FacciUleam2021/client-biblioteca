import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaPageComponent} from './pages/busqueda-page/busqueda-page.component';

const routes: Routes = [
  {
    path: '',
    component: BusquedaPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusquedaRoutingModule { }
