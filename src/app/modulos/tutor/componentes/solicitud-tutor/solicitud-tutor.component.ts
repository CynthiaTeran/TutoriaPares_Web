import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/modelos/respuesta.model';

import { SolicitudAceptar, SolicitudCancelar, SolicitudInfo, SolicitudResponse } from 'src/app/modelos/solicitud.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { APIService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-solicitud-tutor',
  templateUrl: './solicitud-tutor.component.html',
  styleUrls: ['./solicitud-tutor.component.css'],
})
export class SolicitudTutorComponent implements OnInit {

  //Solicitud de la cuál se despliegan los detalles e información
  solicitudSolicitudes: SolicitudInfo = new SolicitudInfo();

  //Todas las solicitudes
  solicitudes: SolicitudInfo[] = [];
  solicitudResponse!: SolicitudResponse;

  constructor(public authservicio: AutentificacionService, public api: APIService, public router: Router) {
  }

  ngOnInit(): void {
    //Recuperar las solicitudes para tutor-solicitudes.
    this.api.getJSON('solicitudesTutor/' + this.authservicio.alumnoActual.tutor_id)
      .subscribe((res: any) => {
        this.solicitudResponse = res as SolicitudResponse;
        this.solicitudes = this.solicitudResponse.array;
      });
  }

  //Aceptar solicitud - pasar a proceso
  aceptarSolicitud(id: number): void {

    //Datos
    var solicitudA: SolicitudAceptar = {
      'solicitud_id': id,
      'tutor_id': this.authservicio.alumnoActual.tutor_id
    };

    //Aceptar solicitud
    this.api.registrar_act('aceptarSolicitud', solicitudA).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
      if(respuesta.success){//De ser exitoso recarga-refresca
        this.router.navigate(['tutor/proceso']);
      }
    })
  }

  //Cancelar una solicitud por parte del tutor
  rechazarSolicitud(id: number): void {
    var solicitudC: SolicitudCancelar = {
      'solicitud_id': id,
      'quien': 'tutor',
      'tutor_id': this.authservicio.alumnoActual.tutor_id
    };

    //Cancelar solicitud
    this.api.registrar_act('cancelarSolicitud', solicitudC).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
      if(respuesta.success){//De ser exitoso recarga-refresca
        this.router.navigate(['tutor']);
      }
      
    })
  }

  detallesSolicitud(solicitudS: SolicitudInfo): void {
    this.solicitudSolicitudes = solicitudS;
  }
}
