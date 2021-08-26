import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { AppComponent } from './app.component';
import { EditarComponent } from './persona/editar/editar.component';



const routes: Routes = [

  //{path:'', redirectTo: 'persona',pathMatch:'full'},
  { path: 'pagina principal', component: AppComponent },

  { path: 'persona', component: PersonaComponent },
  { path: 'estudiante', component: EstudianteComponent },
  //{path:'', redirectTo:'agregar',pathMatch:'full'},
  { path: 'pagina principal', component: AppComponent },
  { path: 'añadir', component: AgregarComponent },
  // {path:'pagina principal',component:AppComponent}
  { path: 'persona/editar/:id', component: EditarComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
