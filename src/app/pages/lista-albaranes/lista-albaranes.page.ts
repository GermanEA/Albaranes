import { Component, OnInit } from '@angular/core';
import { QueriesService } from '../../services/queries.service';
import { ToastService } from '../../services/toast.service';
import { GlobalDataService } from '../../services/global-data.service';

@Component({
  selector: 'app-lista-albaranes',
  templateUrl: './lista-albaranes.page.html',
  styleUrls: ['./lista-albaranes.page.scss'],
})
export class ListaAlbaranesPage implements OnInit {

  fecha: string = this.globalData.fecha;
  datosAlbaran: any[];

  constructor(private globalData: GlobalDataService,
              private listAlbaranes: QueriesService,
              private toast: ToastService) {}

  ngOnInit() {
    this.getAlbaranes(this.fecha);
  }

  getAlbaranes(fecha) {
    this.listAlbaranes.recoverListAlbaranes(fecha).subscribe( resp => {
      console.log(resp);
      if (!resp['estado']) {
        this.toast.warningToast('No existen albaranes para el día seleccionado.');
      } else {
        this.globalData.datosAlbaran = resp['datos'];
        this.datosAlbaran = this.globalData.datosAlbaran;
      }
    }, (error) => {
      this.toast.warningToast('Error al conectar al servidor (Albaranes)');
    });
  }

  getFecha(e) {    
    this.getAlbaranes(e.detail.value.slice(0,10));
  }
}
