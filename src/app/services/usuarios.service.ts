import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {



  constructor( private http : HttpClient ) { }

  cargarUsuarios(){

  const url ='http://localhost:3000/persons';
  return this.http.get( url);


  }
}
