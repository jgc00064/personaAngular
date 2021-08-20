import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  registerForm = this.formBuilder.group({
    
    usuario:[''],
    contraseña:[''],
    email_company:[''],
    email_personal:[''],
    ciudad:[''],
    url_imagen:[''],
    fecha_inicio:[''],
    fecha_final:[''],
    activado:[''],

  });

  submit(){

    console.log(this.registerForm.value);

  }
  ngOnInit(): void {
  }

}
