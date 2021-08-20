import { Component, OnInit } from '@angular/core';
import { IPersona } from '../Interfaces/Interfaz.persona';
import {  PersonaInterface } from './persona.Interface';

import { PersonaService } from './servicios/persona.service';


@Component({

  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})  

export class PersonaComponent implements OnInit {
  
  
  constructor(private personaService: PersonaService){}

  public personas: any = [];

  ngOnInit(): void {

      this.personaService.cargarUsuarios()
      .subscribe(  resp => {
        console.log(resp);
        //console.log(resp[0].usuario);
        this.personas = resp;
        console.log(this.personas);
        
      })
  }
  
}
