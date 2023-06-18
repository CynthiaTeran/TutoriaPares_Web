import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarranavPrincipalComponent } from './vistas/barranav-principal/barranav-principal.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { ModuloAsesoriaComponent } from './vistas/modulo-asesoria/modulo-asesoria.component';
import { ModuloRespuestaComponent } from './vistas/modulo-respuesta/modulo-respuesta.component';
import { PerfilComponent } from './vistas/perfil/perfil.component';
import { AlumnoModule } from './modulos/alumno/alumno.module';
import { AutentificacionModule } from './modulos/autentificacion/autentificacion.module';
import { TutorModule } from './modulos/tutor/tutor.module';
import { FormularioTutorComponent } from './vistas/formulario-tutor/formulario-tutor.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    BarranavPrincipalComponent,
    InicioComponent,
    ModuloAsesoriaComponent,
    ModuloRespuestaComponent,
    PerfilComponent,
    FormularioTutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutentificacionModule,
    AlumnoModule,
    TutorModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
