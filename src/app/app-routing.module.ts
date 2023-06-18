import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizadasAlumnoComponent } from './modulos/alumno/componentes/finalizadas-alumno/finalizadas-alumno.component';
import { ProcesoAlumnoComponent } from './modulos/alumno/componentes/proceso-alumno/proceso-alumno.component';
import { ProximasAlumnoComponent } from './modulos/alumno/componentes/proximas-alumno/proximas-alumno.component';
import { SolicitudAlumnoComponent } from './modulos/alumno/componentes/solicitud-alumno/solicitud-alumno.component';
import { FinalizadasTutorComponent } from './modulos/tutor/componentes/finalizadas-tutor/finalizadas-tutor.component';
import { ProcesoTutorComponent } from './modulos/tutor/componentes/proceso-tutor/proceso-tutor.component';
import { ProximasTutorComponent } from './modulos/tutor/componentes/proximas-tutor/proximas-tutor.component';
import { SolicitudTutorComponent } from './modulos/tutor/componentes/solicitud-tutor/solicitud-tutor.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { ModuloAsesoriaComponent } from './vistas/modulo-asesoria/modulo-asesoria.component';
import { ModuloRespuestaComponent } from './vistas/modulo-respuesta/modulo-respuesta.component';
import { PerfilComponent } from './vistas/perfil/perfil.component';
import { FormularioTutorComponent } from './vistas/formulario-tutor/formulario-tutor.component';
import { PermisoTutorGuard } from './permisos/permiso-tutor.guard';
import { PermisoAlumnoGuard } from './permisos/permiso-alumno.guard';
import { PermisoSesionGuard } from './permisos/permiso-sesion.guard';

const routes: Routes = [
  { path: 'inicio-sesion', component: InicioComponent, canActivate: [PermisoSesionGuard]},
  { path: 'perfil', component: PerfilComponent, canActivate: [PermisoAlumnoGuard]},
  { path: 'tutor', component: ModuloRespuestaComponent, canActivate: [PermisoTutorGuard],
    children: [
      {path: 'solicitud', component: SolicitudTutorComponent },
      {path: 'proceso', component: ProcesoTutorComponent },
      {path: 'proximas', component: ProximasTutorComponent },
      {path: 'finalizadas', component: FinalizadasTutorComponent },
      {path: '', component: SolicitudTutorComponent }
    ]
  },
  { path: 'alumno', component: ModuloAsesoriaComponent, canActivate: [PermisoAlumnoGuard],
    children: [
      {path: 'solicitud', component: SolicitudAlumnoComponent },
      {path: 'proceso', component: ProcesoAlumnoComponent },
      {path: 'proximas', component: ProximasAlumnoComponent },
      {path: 'finalizadas', component: FinalizadasAlumnoComponent },
      {path: '', component: SolicitudAlumnoComponent }
    ]
  },
  { path: 'registro', component: FormularioTutorComponent , canActivate: [PermisoAlumnoGuard]},
  { path: '**', pathMatch: 'full', redirectTo: 'alumno' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
