export class SolicitudInfo{
    solicitud_id: number = 0;
    materia_nombre: string = "";
    tutor_nombre_completo: string = "";
    alumno_telefono: string = "";
    alumno_correo: string = "";
    solicitud_descripcion: string = "";
    solicitud_tema: string = "";
    solicitud_modalidad: string = "";
    solicitud_lugar: string = "";
    solicitud_urgencia: string = "";
    solicitud_fecha_programacion: string = "";
    solicitud_fecha: string = "";
}

export class Solicitud{
    solicitud_fecha: string = "";
    solicitud_urgencia: string = "";
    materia_id: number = 0;
    solicitud_tema: string = "";
    solicitud_descripcion: string = "";
    solicitud_modalidad: string = "";
    solicitud_vigente: number = 0;
    alumno_id: number = 0;
}

export class SolicitudA{
    solicitud_id: number = 0;
    fecha_programacion: string = "";
    lugar: string = "";
}

export class SolicitudInvitados{
    solicitud_id: number = 0;
    alumnosIds: number[] = []; 
}

export class SolicitudFinA{
    solicitud_id: number = 0;
    asesoria_calificacion: number = 0;
}

export class SolicitudFinT{
    solicitud_id: number = 0;
    asesoria_evidencia!: Blob;
}

export class SolicitudCancelar{
    solicitud_id: number = 0;
    quien : string = "";
    tutor_id: number = 0;
}

export class SolicitudAceptar{
    solicitud_id: number = 0;
    tutor_id: number = 0;
}

export class SolicitudResponse{
    array : SolicitudInfo[] = [];
    success: boolean = true;
}