import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosPageComponent} from './pages/libros-page/libros-page.component';

const routes: Routes = [
  {
    path: '',
    component: LibrosPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
