import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Materia, MateriaResponse } from 'src/app/modelos/materia.model';
import { Solicitud } from 'src/app/modelos/solicitud.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { APIService } from 'src/app/servicios/api.service';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/modelos/respuesta.model';

@Component({
  selector: 'app-solicitud-alumno',
  templateUrl: './solicitud-alumno.component.html',
  styleUrls: ['./solicitud-alumno.component.css']
})
export class SolicitudAlumnoComponent implements OnInit {

  
  formSolicitud: FormGroup;
  solicitud: Solicitud = new Solicitud();
  modalidades: string[] = ["P", "L"];
  urgencias: string[] = ["U", "E"];

  materias!: Materia[];
  materiaResponse!: MateriaResponse;

  constructor(public authservicio: AutentificacionService, public api: APIService, public router: Router) { 
    this.formSolicitud = new FormGroup({
      'materia': new FormControl('', Validators.required),
      'tema': new FormControl('',  Validators.required),
      'descripcion': new FormControl('', Validators.required),
      'urgencia': new FormControl('',  Validators.required),
      'modalidad': new FormControl('',  Validators.required),
    })
  }

  ngOnInit() : void{ 
    //Recuperar materias actuales del alumno.
    this.api.getJSON('solicitudes/' + this.authservicio.alumnoActual.plan_id + '/' + this.authservicio.alumnoActual.alumno_semestre ).subscribe((res: any)=>{
      this.materiaResponse = res as MateriaResponse;
      this.materias = this.materiaResponse.array;
    });
  }

  obtenerDatosSolicitud(): void {

    //Obtener fecha
    const pipeFecha = new DatePipe('en-US');
    let fecha = pipeFecha.transform(Date.now(), 'yyyy-MM-dd H:mm:ss')
    if(fecha != undefined){
      this.solicitud.solicitud_fecha = fecha;
    }

    //Completar datos para registro de solicitud
    this.solicitud.alumno_id = this.authservicio.alumnoActual.alumno_id;
    this.solicitud.materia_id = this.formSolicitud.get('materia')?.value;
    this.solicitud.solicitud_descripcion = this.formSolicitud.get('descripcion')?.value;
    this.solicitud.solicitud_modalidad = this.formSolicitud.get('modalidad')?.value;
    this.solicitud.solicitud_tema = this.formSolicitud.get('tema')?.value;
    this.solicitud.solicitud_urgencia = this.formSolicitud.get('urgencia')?.value;
    this.solicitud.solicitud_vigente = 1;
  }

  enviarSolicitud(): void {
    this.obtenerDatosSolicitud();

    //Efectuar api post para registar solicitud
    this.api.registrar_act('nuevaSolicitud', this.solicitud).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
      if(respuesta.success){ //De ser exitoso te lleva a la página de proceso
        this.router.navigate(['alumno/proceso']);
      }

    });
  }
  
}