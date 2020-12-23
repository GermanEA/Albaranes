import { Component, OnInit } from '@angular/core';
import { QueriesService } from '../../services/queries.service';
import { ToastService } from '../../services/toast.service';
import { GlobalDataService } from '../../services/global-data.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-lista-albaranes',
  templateUrl: './lista-albaranes.page.html',
  styleUrls: ['./lista-albaranes.page.scss'],
})
export class ListaAlbaranesPage implements OnInit {

  fecha: string = this.globalData.fecha;
  fechaFormat: string = this.formatFecha(this.fecha);
  datosAlbaran: any[] = [];

  constructor(private globalData: GlobalDataService,
              private listAlbaranes: QueriesService,
              private toast: ToastService,
              private menu: MenuController) {}

  ngOnInit() {
    this.menu.enable(true, 'principal');
    this.getAlbaranes(this.fecha);
  }

  getAlbaranes(fecha) {
    this.listAlbaranes.recoverListAlbaranes(fecha).subscribe( resp => {
      console.log(resp);
      if (!resp['estado']) {
        this.datosAlbaran = [];
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
    this.fecha = e.detail.value.slice(0,10);
    this.fechaFormat = this.formatFecha(this.fecha);
    this.getAlbaranes(this.fecha);
  }

  formatFecha(fecha) {
    let year = fecha.slice(0, 4);
    let month = fecha.slice(5, 7);
    let day = fecha.slice(8, 10);

    return day + ' / ' + month + ' / ' + year;
  }
}
