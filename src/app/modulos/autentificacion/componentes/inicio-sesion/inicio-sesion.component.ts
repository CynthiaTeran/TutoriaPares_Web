import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutentificacionService } from '../../servicios/autentificacion.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
})
export class InicioSesionComponent implements OnInit {
  //Variables a utilizar
  formInicioSesion!: FormGroup;
  id: number = 0;
  contrasena: string = '';

  ngOnInit(): void {}

  constructor(
    private servicioAutentificacion: AutentificacionService ) {
    this.formInicioSesion = new FormGroup({
      id: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{6}'),
      ]),
      contrasena: new FormControl('', Validators.required),
    });
  }

  iniciarSesion(): void {
    //Recuperar datos de formulario
    this.id = this.formInicioSesion.get('id')?.value;
    this.contrasena = this.formInicioSesion.get('contrasena')?.value;

    // Recuperar datos de el id ingresado
    this.servicioAutentificacion.iniciarSesion(this.id, this.contrasena);
  }
}
