import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EducacionDto } from '../core/dtos/educacion-dto';
import { Educacion } from '../core/models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private educacionURL: string = `${environment.baseURL}/educaciones`

  constructor(
    private httpClient : HttpClient
  ) { }

  public crearEducacion(educacionDto : EducacionDto):Observable<any>{
    return this.httpClient.post<any>(this.educacionURL, educacionDto);
  }

  public editarEducacion(id : number, educacionDto : EducacionDto):Observable<any>{
    return this.httpClient.put<any>(`${this.educacionURL}/${id}`, educacionDto);
  }

  public eliminarEducacion(id : number):Observable<any>{
    return this.httpClient.delete<any>(`${this.educacionURL}/${id}`);
  }

  public detalleEducacion(id : number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(`${this.educacionURL}/${id}`);
  }

  public listadoEducaciones():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.educacionURL);
  }


}
