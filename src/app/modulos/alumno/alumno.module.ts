import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalizadasAlumnoComponent } from './componentes/finalizadas-alumno/finalizadas-alumno.component';
import { PerfilAlumnoComponent } from './componentes/perfil-alumno/perfil-alumno.component';
import { ProcesoAlumnoComponent } from './componentes/proceso-alumno/proceso-alumno.component';
import { ProximasAlumnoComponent } from './componentes/proximas-alumno/proximas-alumno.component';
import { SolicitudAlumnoComponent } from './componentes/solicitud-alumno/solicitud-alumno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetallesFormAlumnoComponent } from './componentes/detalles-form-alumno/detalles-form-alumno.component';



@NgModule({
  declarations: [
    FinalizadasAlumnoComponent,
    PerfilAlumnoComponent,
    ProcesoAlumnoComponent,
    ProximasAlumnoComponent,
    SolicitudAlumnoComponent,
    DetallesFormAlumnoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SolicitudAlumnoComponent,
    ProcesoAlumnoComponent,
    ProximasAlumnoComponent,
    FinalizadasAlumnoComponent,
    PerfilAlumnoComponent,
    DetallesFormAlumnoComponent
  ]
})
export class AlumnoModule { }
