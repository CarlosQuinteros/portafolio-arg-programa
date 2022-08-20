import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Educacion } from 'src/app/core/models/educacion';
import { Persona } from 'src/app/core/models/persona';
import { EducacionService } from 'src/app/services/educacion.service';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';
import { CrearEducacionComponent } from '../crear/crear-educacion.component';
import { EditarEducacionComponent } from '../editar/editar-educacion.component';

@Component({
  selector: 'app-lista-educaciones',
  templateUrl: './lista-educaciones.component.html',
  styleUrls: ['./lista-educaciones.component.css'],
  providers: [DialogService]
})
export class ListaEducacionesComponent implements OnInit {

  @Input() persona! : Persona;
  loading : boolean = true;
  educaciones : Educacion[] = [];
  ref! : DynamicDialogRef;

  constructor(
    private personaService: PersonaService,
    private educacionService: EducacionService,
    private dialogService : DialogService
  ) { }

  ngOnInit(): void {
    this.cargarEducaciones();
  }

  cargarEducaciones(): void {
    this.personaService.educacionesDePersona(this.persona.id).subscribe(
      data => {
        this.educaciones = data;
        this.loading = false;
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

  showCrearEducacion(): void {
    this.ref = this.dialogService.open(CrearEducacionComponent ,{
      header: 'Crear Educacion',
      contentStyle:{"overflow": "auto", "max-width": "500px"},
      data:{
        persona : this.persona
      }
    })

    this.ref.onClose.subscribe(
      ()=>{
        this.cargarEducaciones();
      }
    )
  }

  showEditarEducacion(educacionEditar : Educacion):void {
    this.ref = this.dialogService.open(EditarEducacionComponent ,{
      header: 'Editar Educacion',
      contentStyle:{"overflow": "auto", "max-width": "500px"},
      data:{
        educacion : educacionEditar,
        persona : this.persona
      }
    })

    this.ref.onClose.subscribe(
      ()=>{
        this.cargarEducaciones();
      }
    )
  }

  eliminarEducacion(id: number): void {
    Swal.showLoading();
    this.educacionService.eliminarEducacion(id).subscribe(
      data =>{
        Swal.fire(data.message, '', 'success');
        this.cargarEducaciones();
      },
      err =>{
        Swal.fire('Error', err.error.message, 'error');
      }
    )

  }

}
