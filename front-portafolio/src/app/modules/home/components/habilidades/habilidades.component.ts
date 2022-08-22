import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/core/models/habilidad';
import { Persona } from 'src/app/core/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  @Input() persona! : Persona;
  habilidades : Habilidad[] = [];

  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.cargarHabilidades();
  }

  cargarHabilidades(): void {
    this.personaService.habilidadesDePersona(this.persona.id).subscribe(
      data => {
        this.habilidades = data;
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }
}
