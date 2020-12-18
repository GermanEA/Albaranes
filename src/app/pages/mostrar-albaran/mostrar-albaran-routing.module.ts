import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarAlbaranPage } from './mostrar-albaran.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarAlbaranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarAlbaranPageRoutingModule {}
