import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmailDto } from '../core/dtos/email-dto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private contactoURL : string = `${environment.baseURL}/contacto`;
  
  constructor(
    private httpClient : HttpClient
  ) { }

  public enviarMensajeContacto(emailDto : EmailDto): Observable<any> { 
    return this.httpClient.post<any>(this.contactoURL, emailDto);
  }
}
