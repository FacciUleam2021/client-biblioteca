import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: 'autores',
    loadChildren: () => import('@modules/autores/autores.module').then(m => m.AutoresModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('@modules/categoria/categoria.module').then(m => m.CategoriaModule)
  },
  {
    path: 'editorial',
    loadChildren: () => import('@modules/aditorial/aditorial.module').then(m => m.AditorialModule)
  },
  {
    path: 'libros',
    loadChildren: () => import('@modules/libros/libros.module').then(m => m.LibrosModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('@modules/busqueda/busqueda.module').then(m => m.BusquedaModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('@modules/detalle/detalle.module').then(m => m.DetalleModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('@modules/perfil/perfil.module').then(m => m.PerfilModule)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/tracks'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
