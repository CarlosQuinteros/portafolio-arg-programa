import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/core/models/educacion';
import { Persona } from 'src/app/core/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {

  @Input() persona! : Persona;
  educaciones : Educacion[] = [];
  responsiveOptions : any;

  constructor(
    private personaService: PersonaService
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
    this.cargarEducaciones();
  }

  cargarEducaciones(): void {
    this.personaService.educacionesDePersona(this.persona.id).subscribe(
      data => {
        this.educaciones = data;
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

}
