import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../core/dtos/jwt-dto';
import { LoginDto } from '../core/dtos/login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL : string = `${environment.baseURL}/auth`;

  constructor(
    private httpClient : HttpClient
  ) { }


  public login(loginDto : LoginDto):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(`${this.authURL}/login`, loginDto);
  }
}
