import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirmarAlbaranPageRoutingModule } from './firmar-albaran-routing.module';

import { FirmarAlbaranPage } from './firmar-albaran.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirmarAlbaranPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FirmarAlbaranPage]
})
export class FirmarAlbaranPageModule {}
