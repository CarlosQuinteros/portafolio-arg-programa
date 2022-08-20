import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ImagenProyectoDto } from 'src/app/core/dtos/imagen-proyecto-dto';
import { ImagenProyecto } from 'src/app/core/models/imagen-proyecto';
import { Proyecto } from 'src/app/core/models/proyecto';
import { ImagenProyectoService } from 'src/app/services/imagen-proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-imagen-proyecto',
  templateUrl: './editar-imagen-proyecto.component.html',
  styleUrls: ['./editar-imagen-proyecto.component.css']
})
export class EditarImagenProyectoComponent implements OnInit {
 
  proyecto!: Proyecto;
  imagen! : ImagenProyecto;
  form : FormGroup;

  constructor(
    public ref : DynamicDialogRef,
    public config : DynamicDialogConfig,
    private formBuilder : FormBuilder,
    private imagenProyectoService : ImagenProyectoService
  ) {
    this.proyecto = this.config.data.proyecto;
    this.imagen = this.config.data.imagen;
    this.form = this.formBuilder.group({
      idProyecto:[this.proyecto.id, [Validators.required, Validators.min(1)]],
      descripcion:[this.imagen.descripcion, [Validators.required, Validators.minLength(4)]],
      url: [this.imagen.url, [Validators.required, Validators.minLength(4)]],
    })
  }
  ngOnInit(): void {
  }

  crearImagenProyecto(): void {
    const imagen : ImagenProyectoDto = {...this.form.value};
    Swal.showLoading();
    this.imagenProyectoService.editarImagenProyecto(this.imagen.id, imagen).subscribe(
      data => {
        Swal.fire(data.message, '', 'success');
        this.ref.close();
      },
      err =>{
        Swal.fire({
          title: 'Error',
          text: err.error.message,
          icon: 'error',
          target:'#bodyProyecto',
        })
      }
    )
  }

}
