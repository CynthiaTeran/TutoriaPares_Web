import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoResponse } from '../modelos/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  base: string = "http://25.3.160.173:3000/";
  //base: string = "http://25.1.150.17:3000/";

  constructor(public httpClient: HttpClient) { }

  public getJSON(url: string): Observable<any>{
    const urlpath = this.base + url;;
    return this.httpClient.get<any>(urlpath);
  }

  //Método para obtener los datos
  /*getJSON(url: string) {
    const urlpath = this.base + url;
    return this.httpClient.get(urlpath);
  }*/

  //Método para actualizar datos e insertar
  registrar_act(url: string, object: any){
    const urlpath = this.base + url;
    return this.httpClient.post(urlpath,object);
  }

  //Método para eliminar
  eliminar(url: string, id: number){
    const urlpath = this.base + url + "/" + id;
    return this.httpClient.delete(urlpath);
  }
  
  
}
