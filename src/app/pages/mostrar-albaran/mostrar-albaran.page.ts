import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalDataService } from '../../services/global-data.service';
import { QueriesService } from '../../services/queries.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-mostrar-albaran',
  templateUrl: './mostrar-albaran.page.html',
  styleUrls: ['./mostrar-albaran.page.scss'],
})
export class MostrarAlbaranPage implements OnInit {

  idAlbaran: {};
  detalleAlbaran: any[];

  constructor(private globalData: GlobalDataService,
              private toast: ToastService,
              private querieAlbaran: QueriesService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.idAlbaran = data;
    });

    console.log(this.idAlbaran);

    this.querieAlbaran.recoverListAlbaran(this.idAlbaran['idAlbaran']).subscribe( resp => {
      console.log(resp);
      if (!resp['estado']) {
        this.toast.warningToast('No existen albaranes.');
      } else {
        this.globalData.detalleAlbaran = resp['datos'];
        this.detalleAlbaran = this.globalData.detalleAlbaran;
      }
    }, (error) => {
      this.toast.warningToast('Error al conectar al servidor (Albaranes)');
    });

  }

}
