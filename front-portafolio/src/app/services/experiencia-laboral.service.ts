import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ExperienciaDto } from '../core/dtos/experiencia-dto';
import { ExperienciaLaboral } from '../core/models/experiencia-laboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {

  private experienciasURL : string = `${environment.baseURL}/experiencias-laborales`;

  constructor(
    private httpClient : HttpClient
  ) { }

  public crearExperienciaLaboral(experiencia : ExperienciaDto):Observable<any>{
    return this.httpClient.post<any>(this.experienciasURL, experiencia);
  }

  public editarExperienciaLaboral(id : number, experiencia : ExperienciaDto): Observable<any>{
    return this.httpClient.put<any>(`${this.experienciasURL}/${id}`, experiencia);
  }

  public detalleExperienciaLaboral(id : number):Observable<ExperienciaLaboral>{
    return this.httpClient.get<ExperienciaLaboral>(`${this.experienciasURL}/${id}`);
  }

  public eliminarExperienciaLaboral(id : number):Observable<any>{
    return this.httpClient.delete<any>(`${this.experienciasURL}/${id}`);
  }

  public listadoExperienciasLaborales():Observable<ExperienciaLaboral[]>{
    return this.httpClient.get<ExperienciaLaboral[]>(this.experienciasURL);
  }
}
