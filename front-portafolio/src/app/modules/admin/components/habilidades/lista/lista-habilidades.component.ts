import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Habilidad } from 'src/app/core/models/habilidad';
import { Persona } from 'src/app/core/models/persona';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';
import { CrearHabilidadComponent } from '../crear/crear-habilidad.component';
import { EditarHabilidadComponent } from '../editar/editar-habilidad.component';

@Component({
  selector: 'app-lista-habilidades',
  templateUrl: './lista-habilidades.component.html',
  styleUrls: ['./lista-habilidades.component.css'],
  providers: [DialogService]
})
export class ListaHabilidadesComponent implements OnInit {

  @Input() persona! : Persona;
  loading :boolean = true;
  habilidades : Habilidad[] = [];
  ref! : DynamicDialogRef

  constructor(
    private personaService: PersonaService,
    private dialogService: DialogService,
    private habilidadService: HabilidadService
  ) { }

  ngOnInit(): void {
    this.cargarHabilidades();
  }

  cargarHabilidades(): void {
    this.personaService.habilidadesDePersona(this.persona.id).subscribe(
      data => {
        this.habilidades = data;
        this.loading = false;        
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

  showCrearHabilidad(): void {
    this.ref = this.dialogService.open(CrearHabilidadComponent ,{
      header: 'Crear Habilidad',
      contentStyle:{"overflow": "auto", "max-width": "500px"},
      data:{
        persona : this.persona
      }
    })

    this.ref.onClose.subscribe(
      ()=>{
        this.cargarHabilidades();
      }
    )
  }

  showEditarHabilidad(habilidadEditar : Habilidad):void {
    this.ref = this.dialogService.open(EditarHabilidadComponent ,{
      header: 'Editar Habilidad',
      contentStyle:{"overflow": "auto", "max-width": "500px"},
      data:{
        habilidad : habilidadEditar,
        persona : this.persona
      }
    })

    this.ref.onClose.subscribe(
      ()=>{
        this.cargarHabilidades();
      }
    )
  }

  eliminarHabilidad(id: number): void {
    Swal.showLoading();
    this.habilidadService.eliminarHabilidad(id).subscribe(
      data => {
        Swal.fire(data.message, '', 'success');
        this.cargarHabilidades();
      },
      err => {
        Swal.fire('Error',err.error.message,'error');
      }
    )
  }

}
