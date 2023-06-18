import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitudInfo, SolicitudResponse } from 'src/app/modelos/solicitud.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { APIService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-finalizadas-tutor',
  templateUrl: './finalizadas-tutor.component.html',
  styleUrls: ['./finalizadas-tutor.component.css']
})
export class FinalizadasTutorComponent implements OnInit {

  //Solicitud de la cuál se despliegan los detalles e información
  solicitudFinalizada: SolicitudInfo = new SolicitudInfo();
  
  //Todas las solicitudes
  solicitudes: SolicitudInfo[] = [];
  solicitudResponse!: SolicitudResponse;

  constructor(
    public authservicio: AutentificacionService,
    public api: APIService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    //Recuperar las solicitudes para tutor-proximas
    this.api
      .getJSON('finalizadasTutor/' + this.authservicio.alumnoActual.tutor_id)
      .subscribe((res: any) => {
        this.solicitudResponse = res as SolicitudResponse;
        this.solicitudes = this.solicitudResponse.array;
      });
  }

  detallesSolicitud(solicitudF: SolicitudInfo): void {
    this.solicitudFinalizada = solicitudF;
  }

  
}
