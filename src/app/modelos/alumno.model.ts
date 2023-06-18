export class AlumnoImagen{
    tipo: string = "";
    data: number[] = [];
}

export class Alumno {
    alumno_id: number = 0;
    alumno_nombre: string = "";
    alumno_apellidos: string = "";
    plan_id : number = 0;
    alumno_semestre: number = 0;
    alumno_grupo: string = "";
    alumno_grupo_numero: number = 0;
    alumno_telefono: string = "";
    alumno_correo: string = "";
    alumno_contrasena: string = "";
    alumno_imagen : AlumnoImagen = new AlumnoImagen();
    tutor_id: number = 0; 
}


export class AlumnoResponse{
    array: Alumno[] = [];
    sucess: boolean = true;
}