import { Component, Input, OnInit } from '@angular/core';
import { SolicitudInfo } from 'src/app/modelos/solicitud.model';

@Component({
  selector: 'app-detalles-form-tutor',
  templateUrl: './detalles-form-tutor.component.html',
  styleUrls: ['./detalles-form-tutor.component.css']
})
export class DetallesFormTutorComponent implements OnInit {

  @Input() solicitudDet: SolicitudInfo = new SolicitudInfo();

  constructor() { }

  ngOnInit(): void {
  }

}
