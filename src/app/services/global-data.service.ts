import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  cif: string = '';
  idConductor: number;
  fechaHoy: Date = new Date;
  fecha: string = this.fechaHoy.getFullYear() + '-' + (this.fechaHoy.getMonth() + 1) + '-' + this.fechaHoy.getDate();
  datosAlbaran: any[];
  detalleAlbaran: any[];
  
  constructor() {
  }
  

}
