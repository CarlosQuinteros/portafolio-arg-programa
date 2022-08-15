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
    return (this.getToken() !== null && this.isAdmin());
  }

  public getAuthorities():string[]{
    const token = this.getToken();
    if(token === null) return [];
    const payload: any = token?.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const roles = values.roles;
    
    return roles;

  }

  public isAdmin(): boolean{
    const roles = this.getAuthorities();
    return roles.includes('ROLE_ADMIN');
  }

  public logOut(): void {
    window.localStorage.clear();
    this.router.navigate(['/auth']);
  }





}


