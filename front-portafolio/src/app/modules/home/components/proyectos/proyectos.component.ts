import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/core/models/persona';
import { Proyecto } from 'src/app/core/models/proyecto';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() persona! : Persona;
  responsiveOptions: any;
  proyectos : Proyecto[] = [];
  
  constructor(
    private personaService : PersonaService
  ) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '990px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '770px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos(): void {
    this.personaService.proyectosDePersona(this.persona.id).subscribe(
      data => {
        this.proyectos = data;
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

}
