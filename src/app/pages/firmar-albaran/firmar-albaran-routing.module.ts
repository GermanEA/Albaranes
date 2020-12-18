import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirmarAlbaranPage } from './firmar-albaran.page';

const routes: Routes = [
  {
    path: '',
    component: FirmarAlbaranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirmarAlbaranPageRoutingModule {}
