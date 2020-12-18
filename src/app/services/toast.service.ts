import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async warningToast(message: string, color: string) {
    const toast = await this.toastController.create({
      position: 'bottom',
      color: color,
      cssClass: 'my-toast',
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
