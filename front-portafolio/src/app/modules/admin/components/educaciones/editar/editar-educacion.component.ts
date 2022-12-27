import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EducacionDto } from 'src/app/core/dtos/educacion-dto';
import { Educacion } from 'src/app/core/models/educacion';
import { Persona } from 'src/app/core/models/persona';
import { EducacionService } from 'src/app/services/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  persona! :Persona;
  educacion! :Educacion;
  form : FormGroup;
  loading : boolean = false;

  constructor(
    private educacionService : EducacionService,
    public ref : DynamicDialogRef,
    public config : DynamicDialogConfig,
    private formBuilder : FormBuilder
  ) {
    this.persona = this.config.data.persona;
    this.educacion = this.config.data.educacion;

    this.form = this.formBuilder.group({
      idPersona:[this.persona.id, [Validators.required, Validators.min(1)]],
      institucion:[this.educacion.institucion, [Validators.required, Validators.minLength(2)]],
      titulo: [this.educacion.titulo, [Validators.required, Validators.minLength(4)]],
      urlImagen: [this.educacion.urlImagen, [Validators.required, Validators.minLength(4)]],
      fechaDesde: [this.educacion.fechaDesde, [Validators.required]],
      fechaHasta: [this.educacion.fechaHasta, [Validators.required]]
    })
   }
   
  ngOnInit(): void {
  }

  editarEducacion(): void {
    const educacion : EducacionDto = {...this.form.value};
    //Swal.showLoading();
    this.loading = true;
    this.educacionService.editarEducacion(this.educacion.id, educacion).subscribe(
      data => {
        this.loading = false;
        Swal.fire(data.message, '', 'success');
        this.ref.close();
      },
      err => {
        this.loading = false;
        Swal.fire({
          title: 'Error',
          text: err.error.message,
          icon: 'error',
          target:'#bodyEducacion',
        })
      }
    )
  }

}
