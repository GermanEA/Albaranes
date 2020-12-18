import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async warningToast(message: string) {
    const toast = await this.toastController.create({
      header: 'Información',
      position: 'middle',
      color: 'warning',
      cssClass: 'warning-toast general-toast',
      message: message,
      duration: 2000,
      buttons: [
        {
          side: 'start',
          icon: 'warning-outline'
        }
      ]
    });
    toast.present();
  }

  async successToast(message: string) {
    const toast = await this.toastController.create({
      position: 'middle',
      color: 'success',
      cssClass: 'success-toast general-toast',
      message: message,
      duration: 2000,
      buttons: [
        {
          side: 'start',
          icon: 'checkmark-circle-outline'
        }
      ]
    });
    toast.present();
  }

  async dangerToast(message: string) {
    const toast = await this.toastController.create({
      position: 'bottom',
      color: 'danger',
      cssClass: 'danger-toast general-toast',
      message: message,
      duration: 2000,
      buttons: [
        {
          side: 'start',
          icon: 'close-circle-outline'
        }
      ]
    });
    toast.present();
  }
}
