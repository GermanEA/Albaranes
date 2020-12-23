import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSecondaryComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    HeaderSecondaryComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
