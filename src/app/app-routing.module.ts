import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EstudianteComponent } from './estudiante/estudiante.component';



const routes :Routes = [

  //{path:'', redirectTo: 'persona',pathMatch:'full'},
  {path:'persona', component:PersonaComponent},
  {path:'estudiante',component:EstudianteComponent},
 // {path:'', redirectTo:'agregar',pathMatch:'full'},
  {path:'agregar',component:AgregarComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
