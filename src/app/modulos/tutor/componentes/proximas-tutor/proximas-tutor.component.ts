import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/modelos/respuesta.model';
import {
  SolicitudCancelar,
  SolicitudFinT,
  SolicitudInfo,
  SolicitudResponse,
} from 'src/app/modelos/solicitud.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { APIService } from 'src/app/servicios/api.service';
import { ArchivoValidacion } from '../../clases/archivo-extension';

@Component({
  selector: 'app-proximas-tutor',
  templateUrl: './proximas-tutor.component.html',
  styleUrls: ['./proximas-tutor.component.css'],
})
export class ProximasTutorComponent implements OnInit {
  //Solicitud de la cuál se despliegan los detalles e información
  solicitudProxima: SolicitudInfo = new SolicitudInfo();

  //Todas las solicitudes
  solicitudes: SolicitudInfo[] = [];
  solicitudResponse!: SolicitudResponse;

  //Variables para evidencia
  formEvidencia!: FormGroup;
  archivo_evidencia!: File;

  constructor(
    public authservicio: AutentificacionService,
    public api: APIService,
    public router: Router
  ) {
    this.formEvidencia = new FormGroup({
      archivo: new FormControl('', ArchivoValidacion.extension),
    });
  }

  ngOnInit(): void {
    //Recuperar las solicitudes para tutor-proximas
    this.api
      .getJSON('proximasTutor/' + this.authservicio.alumnoActual.tutor_id)
      .subscribe((res: any) => {
        this.solicitudResponse = res as SolicitudResponse;
        this.solicitudes = this.solicitudResponse.array;
      });
  }

  //Función para rechazar una solicitud
  cancelarSolicitud(solicitudP: SolicitudInfo) {
    var solicitudC: SolicitudCancelar = {
      solicitud_id: solicitudP.solicitud_id,
      quien: 'tutor',
      tutor_id: this.authservicio.alumnoActual.tutor_id,
    };

    //Cancelar solicitud
    this.api
      .registrar_act('cancelarSolicitud', solicitudC)
      .subscribe((res: any) => {
        const respuesta: Respuesta = res as Respuesta;
        if (respuesta.success) {
          //De ser exitoso recarga-refresca
          this.router.navigate(['tutor/proceso']);
        }
      });
  }

  //Función para subir evidencia
  evidenciaSolicitud() {
    let solicitudEvidencia: SolicitudFinT = {
      solicitud_id: this.solicitudProxima.solicitud_id,
      asesoria_evidencia: this.archivo_evidencia.prototype,
    };

    //Subir evidencia
    this.api
      .registrar_act('finalizarAsesoria', solicitudEvidencia)
      .subscribe((res: any) => {
        const respuesta: Respuesta = res as Respuesta;
        if (respuesta.success) {
          //De ser exitoso recarga-refresca
          this.router.navigate(['tutor/finalizadas']);
        }
      });
  }

  enCambioArchivo(event: any) {
    this.archivo_evidencia = event.target.files[0];
  }

  detallesSolicitud(solicitudP: SolicitudInfo): void {
    this.solicitudProxima = solicitudP;
  }
}
