import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { FragmentService } from 'src/app/services/fragment.service';
import { TokenServiceService } from 'src/app/services/token-service.service';

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
    this.loadItems();
    this.isLogged = this.tokenService.isLogged();
  }

  goToAboutSection(): void {
    this.router.navigate(['home'],{fragment:'about'});
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
        routerLink: '/home',
        command: ()=> this.goToAboutSection()
      },
      {
        label:'Habilidades'
      },
      {
        label:'Proyectos'
      },
      {
        label:'Experiencia'
      },
      {
        label:'Contacto',
        routerLink: '/contacto'
      },
      {
        label: 'Perfil',
        visible: false,
        icon: 'pi pi-user',
        items: [
          {
            label: 'Editar Datos',
            icon: 'pi pi-user-edit'
          },
          {
            label: 'Salir',
            icon: 'pi pi-sign-out'
          }
        ]
      }
    ];
  }

}
