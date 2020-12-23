import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, Platform, MenuController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastService } from '../../services/toast.service';
import { GlobalDataService } from '../../services/global-data.service';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(private navCtrl: NavController,
              private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private toast: ToastService,
              private globalData: GlobalDataService,
              private localData: LocalDataService,
              private plt: Platform,
              private menu: MenuController) {}

  ngOnInit() {
    this.menu.enable(false);

    this.validations_form = this.formBuilder.group({
      cif: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^([0-9]{8})([A-z])$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(4),
        Validators.required
      ])),
    });

    this.loginUserRemember();
  }

  ionViewDidEnter() { 
    this.plt.backButton.subscribe( () => {
       navigator['app'].exitApp(); 
    }); 
  }

  get cif(): string {
    return this.validations_form.get('cif').value;
  }

  get password(): string {
    return this.validations_form.get('password').value;
  }

  validation_messages = {
    'cif': [
      { type: 'required', message: 'Debes introducir tu cif.' },
      { type: 'pattern', message: 'Inserta un cif válido.' }
    ],
    'password': [
      { type: 'required', message: 'Debes introducir la contraseña.' },
      { type: 'minlength', message: 'La contraseña debe ser al menos de 4 caracteres.' }
    ]
  };

  loginUser() {
    this.authService.authUser(this.cif, this.password).subscribe( resp => {
      console.log(resp);
      if (!resp['estado']) {
        this.toast.dangerToast('El usuario o password son incorrectos.');
      } else if (resp['datos']['activo'] != 1) {
        this.toast.dangerToast('Acceso denegado, pongase en contacto con el administrador.');
      } else {
        this.globalData.idConductor = resp['datos']['idConductor'];
        this.globalData.cif = resp['datos']['cif'];
        this.localData.setStorage(this.cif, this.globalData.idConductor, this.password);
        this.navCtrl.navigateForward('/lista-albaranes');
      }
    }, (error) => {
      this.toast.warningToast('Error al conectar al servidor');
    });
  }

  async loginUserRemember() {  
    await this.localData.getStorage();    
    
    if( this.localData.cif && this.localData.password ) {
      
      let todayDate:Date = new Date();
      let interval:any = Math.round(todayDate.getTime() - this.localData.checkTime.getTime())/60000;
      
      console.log(interval);

      //Cada 3 días se debe de loguear nuevamente obligatoriamente.
      if( interval < 4320 ) {
        this.authService.authUser(this.localData.cif, this.localData.password).subscribe( resp => {
          console.log(resp);
          this.globalData.idConductor = resp['datos']['idConductor'];
          this.globalData.cif = resp['datos']['cif'];
          this.navCtrl.navigateForward('/lista-albaranes');
        });
      }
    }
  }

}
