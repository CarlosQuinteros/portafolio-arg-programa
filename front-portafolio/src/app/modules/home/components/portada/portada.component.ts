import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import { Persona } from 'src/app/core/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  private dni: string = '38223076';
  persona! : Persona;

  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    AOS.init({
      once:true,
    });

    this.obtenerPersona();
  }

  obtenerPersona(): void {
    this.personaService.detallePersonaPorDni(this.dni).subscribe(
      data => {
        this.persona = data;
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

}
