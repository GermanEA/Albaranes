import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarAlbaranPageRoutingModule } from './mostrar-albaran-routing.module';

import { MostrarAlbaranPage } from './mostrar-albaran.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarAlbaranPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MostrarAlbaranPage]
})
export class MostrarAlbaranPageModule {}
