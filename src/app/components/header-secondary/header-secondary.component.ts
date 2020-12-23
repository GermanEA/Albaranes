import { Component, OnInit, Input } from '@angular/core';
import { GlobalDataService } from '../../services/global-data.service';

@Component({
  selector: 'app-header-secondary',
  templateUrl: './header-secondary.component.html',
  styleUrls: ['./header-secondary.component.scss'],
})
export class HeaderSecondaryComponent implements OnInit {
  
  @Input() titulo: string;
  @Input() fecha: string;
  @Input() idAlbaran: string;
  cif: string = this.globalData.cif;

  constructor(private globalData: GlobalDataService) { }

  ngOnInit() {}

}
