import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authUser(cif, password) {
    let gestor_url: string = 'https://dematpruebas.appcimat.com/index.php/api/login_conductores';


    return this.http.post(gestor_url, {
      cif: cif,
      password: password
    }).pipe(
      map( resp => resp ),
      catchError( err => {
        //Error que lanza al no poder hacer una petición al servidor
        console.log(err);
        return throwError(err);
      })
    );    
  }
}
