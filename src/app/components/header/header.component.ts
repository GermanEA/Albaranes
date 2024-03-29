import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menu.enable(true, 'principal');
    this.menu.open('principal');
  }

  closeMenu() {
    this.menu.close();
  }

  toggleMenu() {
    this.menu.toggle();
  }

}
