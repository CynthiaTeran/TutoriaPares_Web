import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitudInfo, SolicitudResponse } from 'src/app/modelos/solicitud.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { APIService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-finalizadas-alumno',
  templateUrl: './finalizadas-alumno.component.html',
  styleUrls: ['./finalizadas-alumno.component.css'],
})
export class FinalizadasAlumnoComponent implements OnInit {

  //Solicitud de la cuál se despliegan los detalles e información
  solicitudFinalizada: SolicitudInfo = new SolicitudInfo();

  //Todas las solicitudes
  solicitudes : SolicitudInfo[] = [];
  solicitudResponse!: SolicitudResponse;

  formCalificacion!: FormGroup;
  calificacion = 0;

  constructor(public authservicio: AutentificacionService, public api: APIService, public router: Router) {
    this.formCalificacion = new FormGroup({
      puntuacion: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
    });
  }

  ngOnInit(): void {
    
    //Recuperar las solicitudes para alumno-finalizadas
    this.api.getJSON('finalizadasAlumno/' + this.authservicio.alumnoActual.alumno_id ).subscribe((res: any)=>{
      this.solicitudResponse= res as SolicitudResponse;
      this.solicitudes = this.solicitudResponse.array;
    });

  }

  //Función para calificar una solicitud
  calificarSolicitud() {
    console.log(this.calificacion);
    //API 
  }

  detallesSolicitud(solicitudF: SolicitudInfo): void {
    this.solicitudFinalizada = solicitudF;
  }
}
