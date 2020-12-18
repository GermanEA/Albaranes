import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  cif: string = '';
  idConductor: number;
  fecha: any = '';
  datosAlbaran: any[];
  detalleAlbaran: any[];
  
  constructor() { }

}
