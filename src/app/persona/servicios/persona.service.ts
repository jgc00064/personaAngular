import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PersonaInterface } from '../persona.Interface';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor( private http: HttpClient) {}
  
  cargarUsuarios () {

      const url ='http://localhost:3000/persons';
      return this.http.get<Array<PersonaInterface>>(url);
  }
  
}
