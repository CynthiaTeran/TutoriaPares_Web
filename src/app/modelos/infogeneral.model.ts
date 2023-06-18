export class InfoGeneral {
    plan_id: number = 0;
    carrera_id: number = 0;
    plan_fecha_inicio: string = "";
    plan_fecha_fin: string = "";
    //carrera_id: number = 0;
    centro_id: number = 0;
    carrera_nombre: string = "";
    carrera_duracion: number = 0;
    carrera_modalidad: string = "";
    carrera_objetivo: string = "";
    carrera_vigente: boolean = true;
    //centro_id: number = 0;
    centro_nombre: string = "";
    centro_acronimo: string = "";
    centro_direccion: string = "";
    centro_telefono: string = "";
    centro_extension: string = "";
    centro_vigente: boolean = true;
}

export class InfoGeneralResponse{
    array: InfoGeneral[] = [];
    sucess: boolean = true;
}