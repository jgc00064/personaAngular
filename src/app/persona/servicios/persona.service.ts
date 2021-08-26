import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { PersonaInterface } from '../../Interfaces/persona.Interface';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor( private http: HttpClient) {}
  
  cargarUsuarios () {

      const url ='http://localhost:3000/persons';
      return this.http.get<Array<PersonaInterface>>(url);
  }

  borrarPerson(persona: PersonaInterface){

    const url='http://localhost:3000/persons/'+persona.id
    return this.http.delete<PersonaInterface>(url);
  }

  getPersonPorId(id:number){

    const url='http://localhost:3000/persons/'+id
    return this.http.get<PersonaInterface>(url)

  }
  
}
