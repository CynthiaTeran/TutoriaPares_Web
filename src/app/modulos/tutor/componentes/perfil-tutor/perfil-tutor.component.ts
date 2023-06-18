import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MateriaInfo, MateriaInfoResponse } from 'src/app/modelos/materia.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { APIService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-perfil-tutor',
  templateUrl: './perfil-tutor.component.html',
  styleUrls: ['./perfil-tutor.component.css']
})
export class PerfilTutorComponent implements OnInit {

  //Variables para Tutores
  materias: MateriaInfo[] = [];
  materiasResponse!: MateriaInfoResponse;

  constructor(public aservicio: AutentificacionService, public router: Router, public api: APIService) { }

  ngOnInit(): void {
    //Recuperar datos de tutor
    this.aservicio.infoTutor();

    //Recuperar materias que da el tutor
    this.api.getJSON('materiasTutor/' + this.aservicio.alumnoActual.tutor_id).subscribe((res: any)=>{
      this.materiasResponse= res as MateriaInfoResponse;
      this.materias= this.materiasResponse.array;
    });
    
  }

}