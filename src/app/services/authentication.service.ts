import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authUser(email, password) {
    let gestor_url: string = 'http://gestorv2.marruzellapp.com/api/login_app';

    return this.http.post(gestor_url, {
      email: email,
      password: password
    });
    
  }
}
