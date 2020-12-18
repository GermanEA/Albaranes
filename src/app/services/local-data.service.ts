import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  cif: string = '';
  idConductor: number;
  datos: any[];

  constructor() { }

  getCif() {
    return this.cif
  }

  getIdConductor() {
    return this.idConductor;
  }
  
}
