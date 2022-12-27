import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ImagenProyectoDto } from 'src/app/core/dtos/imagen-proyecto-dto';
import { Proyecto } from 'src/app/core/models/proyecto';
import { ImagenProyectoService } from 'src/app/services/imagen-proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-imagen-proyecto',
  templateUrl: './crear-imagen-proyecto.component.html',
  styleUrls: ['./crear-imagen-proyecto.component.css']
})
export class CrearImagenProyectoComponent implements OnInit {

  proyecto!: Proyecto;
  form : FormGroup;
  loading : boolean = false;

  constructor(
    public ref : DynamicDialogRef,
    public config : DynamicDialogConfig,
    private formBuilder : FormBuilder,
    private imagenProyectoService : ImagenProyectoService
  ) {
    this.proyecto = this.config.data.proyecto;
    this.form = this.formBuilder.group({
      idProyecto:[this.proyecto.id, [Validators.required, Validators.min(1)]],
      descripcion:['', [Validators.required, Validators.minLength(4)]],
      url: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  ngOnInit(): void {
  }

  crearImagenProyecto(): void {
    const imagen : ImagenProyectoDto = {...this.form.value};
    //Swal.showLoading();
    this.loading = true;
    this.imagenProyectoService.crearImagenProyecto(imagen).subscribe(
      data => {
        this.loading = false;
        Swal.fire(data.message, '', 'success');
        this.ref.close();
      },
      err =>{
        this.loading = false;
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
