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

  fecha: any;
  datosAlbaran: any[];

  constructor(private globalData: GlobalDataService,
              private listAlbaranes: QueriesService,
              private toast: ToastService) { }

  ngOnInit() {
    this.listAlbaranes.recoverListAlbaranes().subscribe( resp => {
      console.log(resp);
      if (!resp['estado']) {
        this.toast.warningToast('No existen albaranes.');
      } else {
        this.globalData.datosAlbaran = resp['datos'];
        this.datosAlbaran = this.globalData.datosAlbaran;
        this.globalData.fecha = resp['datos'][0]['fecha_tte'].slice(0, 10);
        this.fecha = this.globalData.fecha;
      }
    }, (error) => {
      this.toast.warningToast('Error al conectar al servidor (Albaranes)');
    });
  }
}
