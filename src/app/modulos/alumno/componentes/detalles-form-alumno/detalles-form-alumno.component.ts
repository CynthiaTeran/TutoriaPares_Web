import { Component, Input, OnInit } from '@angular/core';
import { SolicitudInfo } from 'src/app/modelos/solicitud.model';

@Component({
  selector: 'app-detalles-form-alumno',
  templateUrl: './detalles-form-alumno.component.html',
  styleUrls: ['./detalles-form-alumno.component.css']
})
export class DetallesFormAlumnoComponent implements OnInit {

  @Input() solicitudDet: SolicitudInfo = new SolicitudInfo();
  
  constructor() { }

  ngOnInit(): void {
  }

}
