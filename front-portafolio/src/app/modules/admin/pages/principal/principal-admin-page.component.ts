import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/core/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal-admin-page',
  templateUrl: './principal-admin-page.component.html',
  styleUrls: ['./principal-admin-page.component.css']
})
export class PrincipalAdminPageComponent implements OnInit {

  private dni : string = '38223076';
  persona! : Persona;

  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.obtenerPersona();
  }

  obtenerPersona(): void {
    this.personaService.detallePersonaPorDni(this.dni).subscribe(
      data => {
        this.persona = data;
      }
    )
  }

}
