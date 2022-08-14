import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Injectable()
export class UsuarioInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenServiceService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = request;
    const token = this.tokenService.getToken();
    if(token != null) {
      intReq = request.clone({headers: request.headers.set('Authorization', `Bearer ${token}`)});
    }
    return next.handle(request);
  }
}
