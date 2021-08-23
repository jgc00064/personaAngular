import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaInterface } from '../persona/persona.Interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {



  constructor( private http : HttpClient ) { }

  cargarUsuarios(){

  const url ='http://localhost:3000/persons';
  return this.http.get( url);

  }
  agregarPerson(personaInterface: []){
    const url ='http://localhost:3000/persons';
    console.log(personaInterface)
    console.log('hola')
    return this.http.post(url, personaInterface);

  }
  
}
