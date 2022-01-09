import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresPageComponent } from './pages/autores-page/autores-page.component';

const routes: Routes = [
  {
    path: '',
    component: AutoresPageComponent
  },
  
]
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
