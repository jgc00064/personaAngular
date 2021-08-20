import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPersona } from 'src/app/Interfaces/Interfaz.persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor( private http: HttpClient) {}
  
  cargarUsuarios () {


      const url ='http://localhost:3000/persons';
      return this.http.get( url);
  }
  
}
