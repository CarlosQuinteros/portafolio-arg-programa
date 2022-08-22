import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { FragmentService } from 'src/app/services/fragment.service';
import { TokenServiceService } from 'src/app/services/token-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLogged : boolean = false;
  items : MenuItem[] = [];
  socialMedia = [
    {label: 'Facebook', url:'https://www.facebook.com/carlix.quinteros/', icon: 'pi pi-facebook'},
    {label: 'Linkedin', url:'https://www.linkedin.com/in/carlos-quinteros-702356123/', icon: 'pi pi-linkedin'},
    {label: 'GitHub', url:'https://github.com/CarlosQuinteros', icon: 'pi pi-github'}
  ]
  constructor(
    private router : Router,
    private tokenService : TokenServiceService
  ) {}

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    this.loadItems();
  }

  logOut(): void {
    this.tokenService.logOut();
    this.isLogged = false;
    this.loadItems();
    Swal.fire('Finalizaste la sesion correctamente', '', 'success');
    this.router.navigate(['/home']);
  }

  irASobreMi(): void {
    this.router.navigate(['home'],{fragment:'about'});
  }

  irAHabilidades(): void {
    this.router.navigate(['home'],{fragment:'habilidades'});
  }

  irAProyectos(): void {
    this.router.navigate(['home'],{fragment:'proyectos'});
  }

  irAEducaciones(): void {
    this.router.navigate(['home'],{fragment:'educaciones'});
  }

  irAExperiencias(): void {
    this.router.navigate(['home'],{fragment:'experiencias'});
  }

  loadItems(): void {
    this.items = [
      {
        label:'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label:'Acerca de',
        command: ()=> this.irASobreMi()
      },
      // {
      //   label:'Habilidades',
      //   command: ()=> this.irAHabilidades()
      // },
      // {
      //   label:'Proyectos',
      //   routerLink: '/home',
      //   command: ()=> this.irAProyectos()
      // },
      // {
      //   label:'Experiencia',
      //   command: ()=> this.irAExperiencias()
      // },
      {
        label:'Contacto',
        routerLink: '/contacto'
      },
      {
        label: 'Perfil',
        visible: this.isLogged,
        routerLink: '/zona-admin',
        icon: 'pi pi-user-edit'
      }
    ];
  }

}
