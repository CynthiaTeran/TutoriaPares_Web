import { MateriaTutor } from "./materiatutor.model";

export class Tutor {
    tutor_id: number = 0;
    alumno_id: number = 0;
    tutor_promedio: number = 0;
    tutor_fecha_inscripcion: string = "";
    tutor_fecha_finalizacion: string = "";
    tutor_programa: string = '';
    tutor_programa_numero: number = 0;
    tutor_calificacion: number = 0;
    tutor_vigente: number = 0;
}

export class TutorResponse{
    array: Tutor[] = [];
    sucess: boolean = true;
}

export class TutorRegistro {
    alumno_id: number = 0;
    promedio: number = 0;
    fecha_inscripcion: string = "";
    programa: string = '';
    materias: MateriaTutor[] = [];
}