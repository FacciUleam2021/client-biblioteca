import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaPageComponent} from './pages/categoria-page/categoria-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriaPageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
