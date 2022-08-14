import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HabilidadDto } from '../core/dtos/habilidad-dto';
import { Habilidad } from '../core/models/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  private habilidadesURL: string = `${environment.baseURL}/habilidades`;

  constructor(
    private httpClient : HttpClient
  ) { }

  public crearHabilidad(habilidad : HabilidadDto):Observable<any>{
    return this.httpClient.post<any>(this.habilidadesURL, habilidad);
  }

  public editarHabilidad(id: number , habilidad : HabilidadDto): Observable<any>{
    return this.httpClient.put<any>(`${this.habilidadesURL}/${id}`, habilidad);
  }

  public detalleHabilidad(id: number):Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(`${this.habilidadesURL}/${id}`);
  }

  public listadoHabilidades():Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.habilidadesURL);
  }

  public eliminarHabilidad(id : number):Observable<any>{
    return this.httpClient.delete<any>(`${this.habilidadesURL}/${id}`);
  }
}
