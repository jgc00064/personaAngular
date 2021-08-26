import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaInterface } from '../Interfaces/persona.Interface';

import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  PersonaInterface: any;
  router: any;
  UsuarioService: any;
  person: PersonaInterface={
    id: 0,
    user:'',
    password: '',
    company_email:'',
    personal_email:'',
    city:'',
    created: new Date()
    
  }

  constructor(private formBuilder : FormBuilder,
              private servicio:UsuariosService,
              private activatedRoute: ActivatedRoute,
              private route: Router) { }

  registerForm = this.formBuilder.group({
    
    user:[''],
    password:[''],
    company_email:[''],
    personal_email:[''],
    city:[''],
    imagen_url:[''],
    created_date:[''],
    active:['']

  });

  submit(){

   // console.log(this.registerForm.value);
   this.servicio.agregarPerson(this.registerForm.value).subscribe(() => {alert("Usuario añadido")}); // esto es para añadir un usuario a la lista persona.json
  }

    ngOnInit(): void {
       
      
    }


}


//function switchMap(arg0: ({ id }: { id: any; }) => any): import("rxjs").OperatorFunction<import("@angular/router").Params, unknown> {
  //throw new Error('Function not implemented.');
//}

