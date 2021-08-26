import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({

  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})  

export class PersonaComponent implements OnInit {

  
  
  constructor(private personaService: UsuariosService,
              public router: Router){}

  public personas: any = []; // Aqui declaramos el array de personas.

  ngOnInit(): void {

      this.personaService.cargarUsuarios()
      .subscribe(  resp => {
        console.log(resp);
        //console.log(resp[0].usuario);
        this.personas = resp;
        console.log(this.personas);
        
      });    
    }

    recibirMensajePerson(id:number){ // Aqui el padre recibe el mensaje para borrar una persona
      console.log('soy el padre'+id);
      //this.persons=this.persons.filter(p=>p.id!=id)
      this.personas.splice(id-1,1);//splice es una funcion para eliminar elemento de un array splice(id,cuantos elementos borrar)
     // .subscribe(() => alert("Elemento borrado en el padre"));
     console.log(this.personas);
    }

  }
