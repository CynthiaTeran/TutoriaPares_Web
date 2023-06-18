export class Materia{
    materia_id: number = 0;
    materia_nombre: string = "";
    departamento_id: number = 0;
    materia_descripcion: string = "";
    materia_vigente: number = 0;
}

export class MateriaResponse{
    array: Materia[] = [];
    sucess: boolean = true;
}

export class MateriaInfo{
    materia_id: number = 0;
    materia_nombre: string = "";

}

export class MateriaInfoResponse{
    array: Materia[] = [];
    sucess: boolean = true;
}

