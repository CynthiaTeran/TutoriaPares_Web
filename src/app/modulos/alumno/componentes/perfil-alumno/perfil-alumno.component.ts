import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoGeneral, InfoGeneralResponse } from 'src/app/modelos/infogeneral.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { APIService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})
export class PerfilAlumnoComponent implements OnInit {

  //Variables para datos del alumno
  infoG!: InfoGeneral;
  infoGResponse!: InfoGeneralResponse;

  constructor(public aservicio: AutentificacionService, public api: APIService, public router: Router) { }

  ngOnInit(): void {

    //Recuperar materias actuales del alumno.
    this.api.getJSON('informacionGeneral/' + this.aservicio.alumnoActual.alumno_id).subscribe((res: any)=>{
      this.infoGResponse = res as InfoGeneralResponse;
      this.infoG = this.infoGResponse.array[0];
    });
  }

}
