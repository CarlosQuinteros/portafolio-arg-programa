import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ProyectoDto } from '../core/dtos/proyecto-dto';
import { Proyecto } from '../core/models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private proyectoURL: string = `${environment.baseURL}/proyectos`;

  constructor(
    private httpClient : HttpClient
  ) { }

  public crearProyecto(proyecto : ProyectoDto):Observable<any>{
    return this.httpClient.post<any>(this.proyectoURL, proyecto);
  }

  public editarProyecto(id:number, proyecto:ProyectoDto):Observable<any>{
    return this.httpClient.put<any>(`${this.proyectoURL}/${id}`, proyecto);
  }

  public detalleProyecto(id:number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(`${this.proyectoURL}/${id}`);
  }

  public listadoProyectos():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proyectoURL);
  }

  public eliminarProyecto(id : number):Observable<any>{
    return this.httpClient.delete<any>(`${this.proyectoURL}/${id}`);
  }

  
}
