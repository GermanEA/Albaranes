import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';

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
              private authService: AuthenticationService) {}

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(4),
        Validators.required
      ])),
    });
  }

  get email(): any {
    return this.validations_form.get('email').value;
  }

  get password(): any {
    return this.validations_form.get('password').value;
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Debes introducir tu correo.' },
      { type: 'pattern', message: 'Inserta un correo válido.' }
    ],
    'password': [
      { type: 'required', message: 'Debes introducir la contraseña.' },
      { type: 'minlength', message: 'La contraseña debe ser al menos de 4 caracteres.' }
    ]
  };

  loginUser() {
    this.authService.authUser(this.email, this.password).subscribe( resp => {
      console.log(resp);
      if (!resp['estado']) {
        console.log("Usuario o password incorrecto.");
      } else {
        console.log("Has podido entrar.");
      }
    });
  }

}
