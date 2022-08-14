import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ImagenProyectoDto } from '../core/dtos/imagen-proyecto-dto';
import { ImagenProyecto } from '../core/models/imagen-proyecto';

@Injectable({
  providedIn: 'root'
})
export class ImagenProyectoService {

  private imagenesProyectoURL: string = `${environment.baseURL}/imagen-proyectos`;

  constructor(
    private httpClient : HttpClient
  ) { }

  public crearImagenProyecto(imagenProyecto : ImagenProyectoDto):Observable<any>{
    return this.httpClient.post<any>(this.imagenesProyectoURL, imagenProyecto);
  }

  public editarImagenProyecto(id : number, imagenProyecto : ImagenProyectoDto): Observable<any>{
    return this.httpClient.put<any>(`${this.imagenesProyectoURL}/${id}`, imagenProyecto);
  }

  public deleteImagenProyecto(id : number): Observable<ImagenProyecto>{
    return this.httpClient.get<ImagenProyecto>(`${this.imagenesProyectoURL}/${id}`);
  }

  public eliminarImagenProyecto(id : number): Observable<any>{
    return this.httpClient.delete<any>(`${this.imagenesProyectoURL}/${id}`);
  }
}
