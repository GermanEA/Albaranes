import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastService } from '../../services/toast.service';
import { GlobalDataService } from '../../services/global-data.service';

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
              private globalData: GlobalDataService) {}

  ngOnInit() {
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
  }

  get cif(): any {
    return this.validations_form.get('cif').value;
  }

  get password(): any {
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
        this.toast.warningToast('El usuario o password son incorrectos.');
      } else if (resp['datos']['activo'] != 1) {
        this.toast.warningToast('Acceso denegado, pongase en contacto con el administrador.');
      } else {
        this.globalData.idConductor = resp['datos']['idConductor'];
        this.globalData.cif = resp['datos']['cif'];
        this.navCtrl.navigateForward('/lista-albaranes');
      }
    }, (error) => {
      this.toast.warningToast('Error al conectar al servidor');
    });
  }

}
