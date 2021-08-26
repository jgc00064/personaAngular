import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarComponent } from './agregar/agregar.component';
import { PersonaCardComponent } from './persona-card/persona-card.component';
import { EditarComponent } from './persona/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
   
    EstudianteComponent,
    AgregarComponent,
    PersonaCardComponent,
    EditarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
