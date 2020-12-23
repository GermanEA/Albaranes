import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { GlobalDataService } from './global-data.service';


@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  gestor_url: string = 'https://dematpruebas.appcimat.com/index.php/api/';

  constructor(private http: HttpClient,
              private globalData: GlobalDataService) { }

  recoverListAlbaranes(fecha) {
    return this.http.post(this.gestor_url + 'get_albaranes', {
      idConductor: this.globalData.idConductor,
      fecha: fecha
    }).pipe(
      map( resp => resp ),
      catchError( err => {
        //Error que lanza al no poder hacer una petición al servidor
        console.log(err);
        return throwError(err);
      })
    ); 
  }  

  recoverListAlbaran(idAlbaran) {
    return this.http.post(this.gestor_url + 'get_albaran', {
      idAlbaran: idAlbaran
    }).pipe(
      map( resp => resp ),
      catchError( err => {
        //Error que lanza al no poder hacer una petición al servidor
        console.log(err);
        return throwError(err);
      })
    );
  }


}
