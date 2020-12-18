import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GlobalDataService } from '../../services/global-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;
  @Input() idAlbaran: string;
  @Input() fecha: any;
  cif: string = this.globalData.cif;
  
  constructor(private menu: MenuController,
              private globalData: GlobalDataService) { }

  ngOnInit() {
  }

  openPrincipal() {
    this.menu.enable(true, 'principal');
    this.menu.open('principal');
  }

}
