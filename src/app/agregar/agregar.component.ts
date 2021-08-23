import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PersonaService } from '../persona/servicios/persona.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private servicio:UsuariosService) { }

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
