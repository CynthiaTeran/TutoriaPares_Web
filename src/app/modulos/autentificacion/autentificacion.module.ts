import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarranavInicioComponent } from './componentes/barranav-inicio/barranav-inicio.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutentificacionService } from './servicios/autentificacion.service';



@NgModule({
  declarations: [
    BarranavInicioComponent,
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    BarranavInicioComponent,
    InicioSesionComponent
  ],
  providers: [
    AutentificacionService
  ]
})
export class AutentificacionModule { }
