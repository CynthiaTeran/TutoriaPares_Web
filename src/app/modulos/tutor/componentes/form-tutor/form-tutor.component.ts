import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Materia, MateriaInfo, MateriaInfoResponse, MateriaResponse } from 'src/app/modelos/materia.model';
import { MateriaTutor} from 'src/app/modelos/materiatutor.model';
import { Respuesta } from 'src/app/modelos/respuesta.model';
import { TutorRegistro } from 'src/app/modelos/tutor.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { APIService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-form-tutor',
  templateUrl: './form-tutor.component.html',
  styleUrls: ['./form-tutor.component.css']
})
export class FormTutorComponent implements OnInit {

  //Forms
  formTutor!:FormGroup;
  formMateriaT!: FormGroup;

  //Variables para mostrar materias
  materias: MateriaInfo[] = [];
  materiaResponse: MateriaInfoResponse = new MateriaInfoResponse();

  //Variables
  calificacion = 0;
  programas: string [] = ["S", "V"];

  materias_lista: MateriaTutor[] = [];

  //Registro a ser insertado
  tutorRegistro: TutorRegistro = new TutorRegistro();

  constructor(public authservicio: AutentificacionService, public api: APIService, public router: Router) {
    
    this.formTutor = new FormGroup({
      promedio: new FormControl(0),
      programa:new FormControl('')
    });

    this.formMateriaT = new FormGroup({
      materia: new FormControl('', Validators.required),
      prom_materia: new FormControl('', Validators.required),
    });
   }


  ngOnInit(): void {
    //Recuperar materias menores al semetre actual del alumno
    //Recuperar materias que da el tutor
    this.api.getJSON('materiasMenores/' + this.authservicio.alumnoActual.alumno_id).subscribe((res: any)=>{
      this.materiaResponse= res as MateriaInfoResponse;
      this.materias= this.materiaResponse.array;
    });
  }

  enviarSolicitudTutor(){
    //Datos para el registro
    this.tutorRegistro.alumno_id = this.authservicio.alumnoActual.alumno_id;
    this.tutorRegistro.promedio = this.formTutor.get(['promedio'])?.value;
    
    //Formato de fecha
    const pipeFecha = new DatePipe('en-US');
    let fecha = pipeFecha.transform(new Date(), 'yyyy-MM-dd H:mm:ss')
    if(fecha != undefined){
      this.tutorRegistro.fecha_inscripcion = fecha;
    }

    this.tutorRegistro.programa = this.formTutor.get(['programa'])?.value;
    this.tutorRegistro.materias = this.materias_lista;

    //API para insertar un nuevo tutor
    this.api.registrar_act('registrarTutor', this.tutorRegistro).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
      if(respuesta.success){//De ser exitoso recarga-refresca
        this.authservicio.actualizarAlumnoTutor();
      }
    })
    this.router.navigate(['registro']);
  }

  getNombre(id: number): string{
    let aux = "";
    this.materias.forEach(obj => {
      if(obj.materia_id == id){
        aux = obj.materia_nombre
      }
    });
    return aux;
  }

  agregarMateriaT(){

    let aux1 = this.formMateriaT.get(['materia'])?.value;
    let aux2 = 0;
    if(this.formMateriaT.get(['prom_materia'])?.value > 10 || this.formMateriaT.get(['prom_materia'])?.value < 0){
      aux2 = 8;
    }else{
      aux2 = this.formMateriaT.get(['prom_materia'])?.value;
    }
    let band = 1;

    this.materias_lista.forEach(obj => {
      if(obj.materia_id == aux1){
        band = 0;
      }
    });

    if(band){
      this.materias_lista.push({tutor_id: 0, materia_id: aux1, promedio_materia: aux2});
    }

  }

  eliminarMateriaT(mat: MateriaTutor){
    this.materias_lista = this.materias_lista.filter((element) => element.materia_id !== mat.materia_id);

  }

}
