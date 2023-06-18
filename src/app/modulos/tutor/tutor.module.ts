import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilTutorComponent } from './componentes/perfil-tutor/perfil-tutor.component';
import { FinalizadasTutorComponent } from './componentes/finalizadas-tutor/finalizadas-tutor.component';
import { ProcesoTutorComponent } from './componentes/proceso-tutor/proceso-tutor.component';
import { ProximasTutorComponent } from './componentes/proximas-tutor/proximas-tutor.component';
import { SolicitudTutorComponent } from './componentes/solicitud-tutor/solicitud-tutor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetallesFormTutorComponent } from './componentes/detalles-form-tutor/detalles-form-tutor.component';
import { AgendaFormTutorComponent } from './componentes/agenda-form-tutor/agenda-form-tutor.component';
import { FormTutorComponent } from './componentes/form-tutor/form-tutor.component';


@NgModule({
  declarations: [
    PerfilTutorComponent,
    FinalizadasTutorComponent,
    ProcesoTutorComponent,
    ProximasTutorComponent,
    SolicitudTutorComponent,
    DetallesFormTutorComponent,
    AgendaFormTutorComponent,
    FormTutorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SolicitudTutorComponent,
    ProcesoTutorComponent,
    ProximasTutorComponent,
    FinalizadasTutorComponent,
    PerfilTutorComponent,
    DetallesFormTutorComponent,
    AgendaFormTutorComponent,
    FormTutorComponent,
  ]
})
export class TutorModule { }
