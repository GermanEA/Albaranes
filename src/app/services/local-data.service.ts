import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  cif: string;
  idConductor: number;
  password: string;
  checkTime: Date;

  constructor(private localStorage: Storage) { }

  setStorage(cif, idConductor, password) {
    let timeSet = new Date();
    this.checkTime = timeSet;

    this.localStorage.set('cif', cif);
    this.localStorage.set('idConductor', idConductor);
    this.localStorage.set('password', password);
    this.localStorage.set('checkTime', this.checkTime);
  }

  async getStorage() {
    this.cif = await this.localStorage.get('cif');
    this.idConductor = await this.localStorage.get('idConductor');
    this.password = await this.localStorage.get('password');
    this.checkTime = await this.localStorage.get('checkTime');
  }

  
  
}
