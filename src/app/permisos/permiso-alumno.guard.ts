import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificacionService } from '../modulos/autentificacion/servicios/autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class PermisoAlumnoGuard implements CanActivate {
  
  constructor(public servicioAut: AutentificacionService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.servicioAut.autentificacion) {
        this.router.navigate(['inicio-sesion']);
      }
      return true;
  } 
  
}
