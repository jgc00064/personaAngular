import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PersonaInterface } from './../Interfaces/persona.Interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {



  constructor( private http : HttpClient ) { }

  private url='http://localhost:3000/persons/'
  cargarUsuarios(){

  return this.http.get<PersonaInterface>( this.url);

  }
  agregarPerson(personaInterface: PersonaInterface[]){
   
    console.log(personaInterface)
    //console.log('hola')
    return this.http.post(this.url, personaInterface);

  }

  borrarPerson(id: number){
    //console.log(id)
    return this.http.delete(this.url+id);
  }

  ActualizarPerson(person: PersonaInterface):Observable<any>{
    console.log(person.id);
    console.log("EditarPersona desde servicio");
    return this.http.put(this.url+"editar/"+person.id,person);

  }

  
}
