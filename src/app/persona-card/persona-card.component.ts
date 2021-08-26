import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { PersonaInterface } from '../Interfaces/persona.Interface';
import { UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'app-persona-card',
  templateUrl: './persona-card.component.html',
  styleUrls: ['./persona-card.component.css']
})

export class PersonaCardComponent{

  constructor(public formBuilder : FormBuilder,public service: UsuariosService,public router: Router){}
  
  @Output()enviar: EventEmitter<number>= new EventEmitter<number>();

  @Input() person: PersonaInterface;
  

  borrarPerson(id:number){
    //console.log(id)
    this.service.borrarPerson(this.person.id).subscribe();
    //this.router.navigate(['/persona']);
    //console.log('soy el hijo'+this.person.id); Este console.log es para ver si entra al hijo.
    this.enviar.emit(this.person.id)
  }

  ActualizarPerson(){

    this.router.navigate(["/persona/editar",this.person.id]);//con esto llevamos el editar al formulario del
    console.log(this.person);
   // this.registerForm.patchValue(this.person)

   // this.service.ActualizarPerson(person).subscribe();
    this.enviar.emit(this.person.id);
  }

}


