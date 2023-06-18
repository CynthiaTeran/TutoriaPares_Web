import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';

@Component({
  selector: 'app-barranav-principal',
  templateUrl: './barranav-principal.component.html',
  styleUrls: ['./barranav-principal.component.css']
})
export class BarranavPrincipalComponent implements OnInit {

  constructor(private servicioAutentificacion: AutentificacionService) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.servicioAutentificacion.cerrarSesion();
  }

}
