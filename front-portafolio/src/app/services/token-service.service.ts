import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {
  
  roles: string[] = [];

  constructor(
    private router: Router
  ) { }

  public setToken(token: string) : void{ 
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public isTokenExpired(): boolean {
    const token = this.getToken();
    const payload: any = token?.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const expiracion = values.exp;
    const fechaActual = new Date().getTime() / 1000;

    return expiracion < fechaActual;
  }

  public isLogged():boolean{
    return this.getToken() ? true : false;
  }

  public getAuthorities():string[]{
    if(!this.isLogged()){
      return [];
    }
    const token = this.getToken();
    const payload: any = token?.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const roles = values.roles;
    
    return roles;

  }

  public isAdmin(): boolean{
    if(!this.isLogged()){
      return false;
    }
    const roles = this.getAuthorities();
    
    if(!roles.includes('ROLE_ADMIN')){
      return false;
    }
    return true;
  }

  public logOut(): void {
    window.localStorage.clear();
    this.router.navigate(['/auth']);
  }





}


