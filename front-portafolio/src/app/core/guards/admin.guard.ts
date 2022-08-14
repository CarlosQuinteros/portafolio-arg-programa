import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenServiceService } from 'src/app/services/token-service.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private tokenService : TokenServiceService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const ADMIN = 'ROLE_ADMIN';
    const rolesDelUsuario = this.tokenService.getAuthorities();

    /** comprobamos si esta logueado o no, para dirigir al login */
    if (!this.tokenService.isLogged()) {
      this.router.navigate(['/auth']);
      Swal.fire('Acceso denegado', 'Debes iniciar sesion', 'error');
      return false;
    }

    /** comprobamos si no expiro el token para cargar el componente */    
    if(this.tokenService.isTokenExpired()){
      this.router.navigate(['/auth']);
      Swal.fire('Sesión Expirada', 'Debes iniciar sesion nuevamente', 'info');
      this.tokenService.logOut();
      return false;
    }


    /** comprobamos si es tiene el rol ROLE_ADMIN */
    if(!rolesDelUsuario.includes(ADMIN)){
      Swal.fire('Acceso denegado','No tienes los permisos necesarios para acceder', 'error');
      return false;
    }
    return true;
  }
  
}
