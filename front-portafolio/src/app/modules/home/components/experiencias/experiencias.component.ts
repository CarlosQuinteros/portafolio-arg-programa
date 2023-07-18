import { Component, Input, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/core/models/experiencia-laboral';
import { Persona } from 'src/app/core/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  @Input() persona! : Persona;
  experiencias : ExperienciaLaboral[] = [];
  responsiveOptions : any;
  
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
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.cargarExperiencias();
  }

  cargarExperiencias(): void {
    this.personaService.experienciasLaboralesDePersona(this.persona.id).subscribe(
      data => {
        this.experiencias = data;
      }
    )
  }

}
