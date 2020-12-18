import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'lista-albaranes',
    loadChildren: () => import('./pages/lista-albaranes/lista-albaranes.module').then( m => m.ListaAlbaranesPageModule)
  },
  {
    path: 'mostrar-albaran',
    loadChildren: () => import('./pages/mostrar-albaran/mostrar-albaran.module').then( m => m.MostrarAlbaranPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
