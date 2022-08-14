import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { PersonaDto } from '../core/dtos/persona-dto';
import { Educacion } from '../core/models/educacion';
import { ExperienciaLaboral } from '../core/models/experiencia-laboral';
import { Habilidad } from '../core/models/habilidad';
import { Persona } from '../core/models/persona';
import { Proyecto } from '../core/models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private personasURL: string = `${environment.baseURL}/personas`;

  constructor(
    private httpClient : HttpClient
  ) { }

  public crearPersona(persona: PersonaDto):Observable<any>{
    return this.httpClient.post<any>(this.personasURL, persona);
  }

  public editarPersona(id:number, persona: PersonaDto):Observable<any>{
    return this.httpClient.put<any>(`${this.personasURL}/${id}`, persona);
  }

  public detallePersona(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.personasURL}/${id}`);
  }

  public detallePersonaPorDni(documento : string):Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.personasURL}/dni/${documento}`);
  }

  public educacionesDePersona(id : number):Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(`${this.personasURL}/${id}/educaciones`);
  }

  public experienciasLaboralesDePersona(id:number):Observable<ExperienciaLaboral[]>{
    return this.httpClient.get<ExperienciaLaboral[]>(`${this.personasURL}/${id}/experiencias-laborales`);
  }

  public habilidadesDePersona(id:number):Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(`${this.personasURL}/${id}/habilidades`);
  }

  public proyectosDePersona(id:number):Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(`${this.personasURL}/${id}/proyectos`);
  }


}
