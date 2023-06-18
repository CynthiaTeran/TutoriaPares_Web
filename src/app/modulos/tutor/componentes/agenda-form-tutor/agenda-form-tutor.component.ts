import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/modelos/respuesta.model';
import { SolicitudA, SolicitudInfo, SolicitudInvitados } from 'src/app/modelos/solicitud.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { APIService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-agenda-form-tutor',
  templateUrl: './agenda-form-tutor.component.html',
  styleUrls: ['./agenda-form-tutor.component.css']
})
export class AgendaFormTutorComponent implements OnInit {

  @Input() solicitudAgendar: SolicitudInfo = new SolicitudInfo();

  formAgenda!:FormGroup;
  formInvita!: FormGroup;

  alumnos_invitados: number[]= [];

  constructor(public authservicio: AutentificacionService, public api: APIService, public router: Router) {
    this.formAgenda = new FormGroup({
      'fecha': new FormControl('', Validators.required),
      'sitio':new FormControl('', Validators.required)
    });
    this.formInvita = new FormGroup({
      id: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{6}'),
      ])
    });
   }

  ngOnInit(): void {
  }

  agendarSolicitud(): void {
    //Formato de fecha
    const pipeFecha = new DatePipe('en-US');
    let fecha = pipeFecha.transform(this.formAgenda.get(['fecha'])?.value, 'yyyy-MM-dd H:mm:ss')
    if(fecha != undefined){
      this.solicitudAgendar.solicitud_fecha_programacion = fecha;
    }
    
    //Definir estructura de datos
    var solicitudA: SolicitudA = {
      'solicitud_id': this.solicitudAgendar.solicitud_id,
      'fecha_programacion': this.solicitudAgendar.solicitud_fecha_programacion,
      'lugar': this.formAgenda.get(['sitio'])?.value
    };

    //Agendar solicitud
    this.api.registrar_act('programarSolicitud', solicitudA).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
      if(respuesta.success){//De ser exitoso recarga-refresca
        if(this.alumnos_invitados.length != 0)
          this.invitados();
        else
          this.router.navigate(['tutor/proximas']);
      }
    })

  }

  agregarInvitado(): void{
    if(!this.alumnos_invitados.includes(this.formInvita.get('id')?.value)){
      this.alumnos_invitados.push(this.formInvita.get('id')?.value);
    }
  }
  eliminarInvitado(id: number): void {
    var index =this.alumnos_invitados.indexOf(id);
    if(index != -1){
      this.alumnos_invitados.splice(index, 1);
    }
  }

  //Función para añadir alumnos asistentes a la asesoría
  invitados(){
    //Definir estructura de datos
    var solicitudI: SolicitudInvitados = {
      'solicitud_id': this.solicitudAgendar.solicitud_id,
      'alumnosIds': this.alumnos_invitados,
    };

    //Agregar/Modificar tabla Alumno-Solicitud
    this.api.registrar_act('alumnosInvitados', solicitudI).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
      if(respuesta.success){//De ser exitoso recarga-refresca
        this.router.navigate(['tutor/proximas']);
      }
    })

  }
}
