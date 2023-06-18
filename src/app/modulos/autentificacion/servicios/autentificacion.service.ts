import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Alumno, AlumnoResponse } from 'src/app/modelos/alumno.model';
import { Tutor, TutorResponse } from 'src/app/modelos/tutor.model';
import { APIService } from 'src/app/servicios/api.service';

@Injectable({
  providedIn: 'root',
})
export class AutentificacionService {

  //Datos del alumno
  alumnoActual: Alumno = new Alumno();
  alumnoResponse: AlumnoResponse = new AlumnoResponse();

  //Datos del tutor
  tutorActual: Tutor = new Tutor();
  tutorResponse: TutorResponse = new TutorResponse();

  //Bandera para indicar si inicio sesion de manera correcta
  autentificacion: boolean = false;

  constructor(public router: Router, public api: APIService) {}

  //Método para actualizar la información del alumno/tutor Actual
  actualizarAlumnoTutor(){
    this.api.getJSON('login/' + this.alumnoActual.alumno_id).subscribe((res: any)=>{
      this.alumnoResponse= res as AlumnoResponse;
      this.alumnoActual = this.alumnoResponse.array[0];
      this.router.navigate(['perfil']);
    });
  }

  //Método para obtener info del Tutor
  infoTutor(){
    this.api.getJSON('informacionTutor/' + this.alumnoActual.tutor_id).subscribe((res: any)=>{
      this.tutorResponse= res as TutorResponse;
      this.tutorActual = this.tutorResponse.array[0];
    });
  }

  // Recuperar datos de el id ingresado
  iniciarSesion(id: number, contrasena: string) {
    this.api.getJSON('login/' + id).subscribe((res: any)=>{
      this.alumnoResponse= res as AlumnoResponse;
      this.alumnoActual = this.alumnoResponse.array[0];
      this.validarSesion(id, contrasena);
    });
  }

  //Método para usuario logueado
  get obtenerAutentificacionAlumno(): boolean {
    return this.autentificacion;
  }

  //Método para ver si el alumno es también tutor
  get obtenerAutentificacionTutor(): boolean {
    return this.alumnoActual.tutor_id != 0 ? true : false;
  }

  //Método para validar contraseñas y usuario correctos
  validarSesion(idInicio: number, contrasenaInicio: string): void {
    if (
      this.alumnoActual.alumno_id === idInicio &&
      this.alumnoActual.alumno_contrasena === contrasenaInicio
    ) {
      //Se ser correcto dirige a módulo asesorías
      this.autentificacion = true;
      this.router.navigate(['/alumno']);
    } else {
      //De no ser correcto regresa a inicio-sesion
      this.cerrarSesion();
    }
  }

  //Método para cerrar sesión
  cerrarSesion(): void {
    this.alumnoActual = new Alumno();
    this.tutorActual = new Tutor();
    this.autentificacion = false;
    this.router.navigate(['/inicio-sesion']);
  }
}