import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/modelos/respuesta.model';

import { SolicitudCancelar, SolicitudInfo, SolicitudResponse } from 'src/app/modelos/solicitud.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { APIService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-proceso-tutor',
  templateUrl: './proceso-tutor.component.html',
  styleUrls: ['./proceso-tutor.component.css'],
})
export class ProcesoTutorComponent implements OnInit {
  
  //Solicitud de la cuál se despliegan los detalles e información
  solicitudProceso: SolicitudInfo = new SolicitudInfo();

  //Todas las solicitudes
  solicitudes: SolicitudInfo[] = [];
  solicitudResponse!: SolicitudResponse;

  constructor(public authservicio: AutentificacionService, public api: APIService, public router: Router) {
    
  }

  ngOnInit(): void {
    //Recuperar las solicitudes para tutor-proceso
    this.api.getJSON('enProcesoTutor/' + this.authservicio.alumnoActual.tutor_id)
      .subscribe((res: any) => {
        this.solicitudResponse = res as SolicitudResponse;
        this.solicitudes = this.solicitudResponse.array;
      });
  }

  agendarSolicitud(solicitudP: SolicitudInfo): void {
    this.solicitudProceso = solicitudP;
  }

  //Cancelar una solicitud por parte del tutor
  cancelarSolicitud(id: number): void {
    var solicitudC: SolicitudCancelar = {
      'solicitud_id': id,
      'quien': 'tutor',
      'tutor_id': this.authservicio.alumnoActual.tutor_id
    };

    //Cancelar solicitud
    this.api.registrar_act('cancelarSolicitud', solicitudC).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
      if(respuesta.success){//De ser exitoso recarga-refresca
        this.router.navigate(['tutor/solicitud']);
      }
      
    })
  }

  detallesSolicitud(solicitudP: SolicitudInfo): void {
    this.solicitudProceso = solicitudP;
  }
}
