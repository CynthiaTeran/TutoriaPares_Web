export class MateriaTutor{
    tutor_id: number = 0;
    materia_id: number = 0;
    promedio_materia: number = 0;
}

export class MateriaTutorInfo{
    materia_id: number = 0;
    materia_nombre: string = "";
    promedio_materia: number = 0;
}

export class MateriaTutorResponse{
    array: MateriaTutor[] = [];
    sucess: boolean = true;
}

export class MateriaTutorInfoResponse{
    array: MateriaTutorInfo[] = [];
    sucess: boolean = true;
}