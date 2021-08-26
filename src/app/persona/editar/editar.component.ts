import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaInterface } from 'src/app/Interfaces/persona.Interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
/*
  person: PersonaInterface={

    user:'',
    password: '',
    company_email:'',
    personal_email:'',
    city:'',
    created: new Date()
    
  } */

  constructor(private formBuilder : FormBuilder,
              private servicio:UsuariosService,
              private activatedRoute: ActivatedRoute,
              private route: Router,
              private router: ActivatedRoute,
              ) { }

              private person: PersonaInterface


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


  ngOnInit(): void {
    this.router.params.subscribe(param=>{ 
    this.registerForm.patchValue(this.person)
    console.log(param)
    });

  }


 ActualizaPersona(){

     console.log(this.registerForm.value);
     //this.person.user=this.person.user;
     
    this.servicio.ActualizarPerson(this.registerForm.value).subscribe(() => {alert("Usuario actualizado")}); // esto es para añadir un usuario a la lista persona.json
   
  }

}
