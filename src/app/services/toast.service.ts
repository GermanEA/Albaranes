import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async warningToast(message: string) {
    const toast = await this.toastController.create({
      position: 'bottom',
      color: 'warning',
      cssClass: 'my-toast',
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async successToast(message: string) {
    const toast = await this.toastController.create({
      position: 'bottom',
      color: 'success',
      cssClass: 'my-toast',
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async dangerToast(message: string) {
    const toast = await this.toastController.create({
      position: 'bottom',
      color: 'warning',
      cssClass: 'my-toast',
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
