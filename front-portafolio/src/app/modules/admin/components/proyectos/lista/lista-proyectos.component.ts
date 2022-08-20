import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Persona } from 'src/app/core/models/persona';
import { Proyecto } from 'src/app/core/models/proyecto';
import { PersonaService } from 'src/app/services/persona.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';
import { CrearProyectoComponent } from '../crear/crear-proyecto.component';
import { EditarProyectoComponent } from '../editar/editar-proyecto.component';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css'],
  providers: [DialogService]
})
export class ListaProyectosComponent implements OnInit {

  @Input() persona! : Persona;
  proyectos : Proyecto[] = [];
  loading: boolean = true;
  ref! : DynamicDialogRef;

  constructor(
    private personaService: PersonaService,
    private dialogService: DialogService,
    private proyectoService: ProyectoService
  ) { }

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos():void {
    this.personaService.proyectosDePersona(this.persona.id).subscribe(
      data => {
        this.proyectos = data;
        this.loading = false;
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

  showCrearProyecto(): void {
    this.ref = this.dialogService.open(CrearProyectoComponent ,{
      header: 'Crear Proyecto',
      contentStyle:{"overflow": "auto", "max-width": "500px"},
      data:{
        persona : this.persona
      }
    })

    this.ref.onClose.subscribe(
      ()=>{
        this.cargarProyectos();
      }
    )
  }

  showEditarProyecto(proyectoEditar : Proyecto):void {
    this.ref = this.dialogService.open(EditarProyectoComponent ,{
      header: 'Editar Proyecto',
      contentStyle:{"overflow": "auto", "max-width": "500px"},
      data:{
        proyecto : proyectoEditar,
        persona : this.persona
      }
    })

    this.ref.onClose.subscribe(
      ()=>{
        this.cargarProyectos();
      }
    )
  }

  eliminarProyecto(id:number): void {
    Swal.showLoading();
    this.proyectoService.eliminarProyecto(id).subscribe(
      data=>{
        Swal.fire(data.message, '', 'success');
        this.cargarProyectos();
      },
      err=>{
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

}
