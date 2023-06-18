import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/modelos/respuesta.model';
import { SolicitudCancelar, SolicitudInfo, SolicitudResponse } from 'src/app/modelos/solicitud.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { APIService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-proximas-alumno',
  templateUrl: './proximas-alumno.component.html',
  styleUrls: ['./proximas-alumno.component.css']
})
export class ProximasAlumnoComponent implements OnInit {

//Solicitud de la cuál se despliegan los detalles e información
solicitudProxima: SolicitudInfo = new SolicitudInfo();

//Todas las solicitudes
solicitudes : SolicitudInfo[] = [];
solicitudResponse!: SolicitudResponse;


constructor(public authservicio: AutentificacionService, public api: APIService, public router: Router) {
}

ngOnInit(): void {

  //Recuperar las solicitudes para alumno-próximas.
  this.api.getJSON('proximasAlumno/' + this.authservicio.alumnoActual.alumno_id ).subscribe((res: any)=>{
    this.solicitudResponse= res as SolicitudResponse;
    this.solicitudes = this.solicitudResponse.array;
  });

  
}

//Función para eliminar una solicitud
cancelarSolicitud(solicitudP: SolicitudInfo){
  var solicitudC: SolicitudCancelar = {
    'solicitud_id': solicitudP.solicitud_id,
    'quien': 'alumno',
    'tutor_id': 0
  };

  //Cancelar solicitud
  this.api.registrar_act('cancelarSolicitud', solicitudC).subscribe((res: any) => {
    const respuesta: Respuesta = res as Respuesta;
    if(respuesta.success){//De ser exitoso recarga-refresca
      this.router.navigate(['alumno/proceso']);
    }
    
  })

}

detallesSolicitud(solicitudP: SolicitudInfo): void {
  this.solicitudProxima = solicitudP;
}

}