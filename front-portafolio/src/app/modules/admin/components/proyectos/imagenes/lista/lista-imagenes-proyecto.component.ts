import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ImagenProyecto } from 'src/app/core/models/imagen-proyecto';
import { Proyecto } from 'src/app/core/models/proyecto';
import { ImagenProyectoService } from 'src/app/services/imagen-proyecto.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';
import { CrearImagenProyectoComponent } from '../crear/crear-imagen-proyecto.component';
import { EditarImagenProyectoComponent } from '../editar/editar-imagen-proyecto.component';

@Component({
  selector: 'app-lista-imagenes-proyecto',
  templateUrl: './lista-imagenes-proyecto.component.html',
  styleUrls: ['./lista-imagenes-proyecto.component.css'],
  providers: [DialogService]
})
export class ListaImagenesProyectoComponent implements OnInit {

  idProyecto: number = 0;
  proyecto! : Proyecto;
  loading : boolean = true;
  ref! : DynamicDialogRef

  constructor(
    private activatedRoute : ActivatedRoute,
    private proyectoService : ProyectoService,
    private imagenProyectoService : ImagenProyectoService,
    private dialogService : DialogService
  )
  {
    this.idProyecto = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.obtenerProyecto();
  }

  obtenerProyecto(): void {
    this.proyectoService.detalleProyecto(this.idProyecto).subscribe(
      data => {
        this.proyecto = data;
        this.loading = false;
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

  showCrearImagen():void {
    this.ref = this.dialogService.open(CrearImagenProyectoComponent ,{
      header: 'Crear Imagen',
      contentStyle:{"overflow": "auto", "max-width": "500px"},
      data:{
        proyecto : this.proyecto
      }
    })

    this.ref.onClose.subscribe(
      ()=>{
        this.obtenerProyecto();
      }
    )
  }

  showEditarImagen(imagenEditar: ImagenProyecto):void {
    this.ref = this.dialogService.open(EditarImagenProyectoComponent ,{
      header: 'Editar Imagen',
      contentStyle:{"overflow": "auto", "max-width": "500px"},
      data:{
        imagen : imagenEditar,
        proyecto: this.proyecto
      }
    })

    this.ref.onClose.subscribe(
      ()=>{
        this.obtenerProyecto();
      }
    )
  }

  eliminarImagen(id: number):void{
    Swal.showLoading();
    this.imagenProyectoService.eliminarImagenProyecto(id).subscribe(
      data => {
        Swal.fire(data.message, '', 'success');
        this.obtenerProyecto();
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

}
