import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-firmar-albaran',
  templateUrl: './firmar-albaran.page.html',
  styleUrls: ['./firmar-albaran.page.scss'],
})
export class FirmarAlbaranPage implements AfterViewInit {

  idAlbaran: {};

  @ViewChild('imageCanvas', { static: false }) canvas: any;
  canvasElement: any;
  saveX: number;
  saveY: number;

  drawing: boolean = false;

  selecterColor: string = '#000000';
  lineWidth: number = 2;

  constructor(private route: ActivatedRoute,
              private plt: Platform,
              private toast: ToastService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.idAlbaran = data;
    });
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() - 30 + '';
    this.canvasElement.height = 200;
  }

  startDrawing(ev) {
    this.drawing = true;
    const canvasPosition = this.canvasElement.getBoundingClientRect();

    this.saveX = ev.pageX - canvasPosition.x;
    this.saveY = ev.pageY - canvasPosition.y;
  }

  startDrawingTouch(ev){
    this.drawing = true;
    const canvasPosition = this.canvasElement.getBoundingClientRect();    

    this.saveX = ev.touches[0].pageX - canvasPosition.x;
    this.saveY = ev.touches[0].pageY - canvasPosition.y;
  }

  moved(ev) {
    if (!this.drawing) return;
    const canvasPosition = this.canvasElement.getBoundingClientRect();
    let ctx = this.canvasElement.getContext('2d');

    let currentX = ev.pageX - canvasPosition.x;
    let currentY = ev.pageY - canvasPosition.y;  

    ctx.beginPath();
    ctx.lineJoin = 'round';
    ctx.moveTo(this.saveX, this.saveY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.selecterColor;
    ctx.lineWidth = this.lineWidth;
    ctx.stroke();

    this.saveX = currentX;
    this.saveY = currentY;
  }

  touchMoved(ev){
    if (!this.drawing) return;
    const canvasPosition = this.canvasElement.getBoundingClientRect();

    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.touches[0].pageX - canvasPosition.x;
    let currentY = ev.touches[0].pageY - canvasPosition.y;

    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(this.saveX, this.saveY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.selecterColor;
    ctx.lineWidth = this.lineWidth;
    ctx.stroke();       

    this.saveX = currentX;
    this.saveY = currentY;

  }

  endDrawing() {
    this.drawing = false;
  }

  clearCanvas() {
    const ctx = this.canvasElement.getContext('2d');
    ctx.clearRect( 0, 0, this.canvasElement.width, this.canvasElement.height);
  }

  isCanvasBlank(canvas) {
    return !canvas.getContext('2d')
      .getImageData(0, 0, canvas.width, canvas.height).data
      .some(channel => channel !== 0);
  }

  async exportCanvasImage() {
    
    if(this.isCanvasBlank(this.canvasElement)){
      this.toast.warningToast('Es necesario una firma.');
    } else {
      const dataUrl = this.canvasElement.toDataURL();
      const base64Response = await fetch(dataUrl);
      const blob = await base64Response.blob();
    
      // var uploadTask = this.storage.storage.ref().child('images/' + this.inputAlbaran['numero'] + '.pdf').put(blob);
      
      this.toast.successToast('Su firma se ha guardado.');
      this.navCtrl.navigateForward('/lista-albaranes');
    }  
  }

}
