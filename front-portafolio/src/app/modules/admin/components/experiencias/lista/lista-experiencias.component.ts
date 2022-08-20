import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ExperienciaLaboral } from 'src/app/core/models/experiencia-laboral';
import { Persona } from 'src/app/core/models/persona';
import { ExperienciaLaboralService } from 'src/app/services/experiencia-laboral.service';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';
import { CrearExperienciaComponent } from '../crear/crear-experiencia.component';
import { EditarExperienciaComponent } from '../editar/editar-experiencia.component';

@Component({
  selector: 'app-lista-experiencias',
  templateUrl: './lista-experiencias.component.html',
  styleUrls: ['./lista-experiencias.component.css'],
  providers: [DialogService]
})
export class ListaExperienciasComponent implements OnInit {

  @Input() persona! : Persona;
  experiencias : ExperienciaLaboral[] = [];
  loading: boolean = true;
  ref! : DynamicDialogRef;

  constructor(
    private personaService: PersonaService,
    private dialogService: DialogService,
    private experienciasService: ExperienciaLaboralService
  ) { }

  ngOnInit(): void {
    this.cargarExperiencias();
  }

  cargarExperiencias(): void {
    this.personaService.experienciasLaboralesDePersona(this.persona.id).subscribe(
      data => {
        this.experiencias = data;
        this.loading = false;
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

  showCrearExperiencia(): void {
    this.ref = this.dialogService.open(CrearExperienciaComponent ,{
      header: 'Crear Experiencia',
      contentStyle:{"overflow": "auto", "max-width": "500px"},
      data:{
        persona : this.persona
      }
    })

    this.ref.onClose.subscribe(
      ()=>{
        this.cargarExperiencias();
      }
    )
  }

  showEditarExperiencia(experienciaEditar : ExperienciaLaboral):void {
    this.ref = this.dialogService.open(EditarExperienciaComponent ,{
      header: 'Editar Experiencia',
      contentStyle:{"overflow": "auto", "max-width": "500px"},
      data:{
        experiencia : experienciaEditar,
        persona : this.persona
      }
    })

    this.ref.onClose.subscribe(
      ()=>{
        this.cargarExperiencias();
      }
    )
  }

  eliminarExperiencia(id:number): void {
    Swal.showLoading();
    this.experienciasService.eliminarExperienciaLaboral(id).subscribe(
      data=>{
        Swal.fire(data.message, '', 'success');
        this.cargarExperiencias();
      },
      err=>{
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

}
