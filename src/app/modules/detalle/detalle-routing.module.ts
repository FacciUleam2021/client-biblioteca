import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePageComponent} from './pages/detalle-page/detalle-page.component';

const routes: Routes = [
  {
    path: '',
    component: DetallePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleRoutingModule { }
