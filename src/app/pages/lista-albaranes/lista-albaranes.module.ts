import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAlbaranesPageRoutingModule } from './lista-albaranes-routing.module';

import { ListaAlbaranesPage } from './lista-albaranes.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAlbaranesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaAlbaranesPage]
})
export class ListaAlbaranesPageModule {}
