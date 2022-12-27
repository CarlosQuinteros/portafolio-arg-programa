import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EducacionDto } from 'src/app/core/dtos/educacion-dto';
import { Educacion } from 'src/app/core/models/educacion';
import { Persona } from 'src/app/core/models/persona';
import { EducacionService } from 'src/app/services/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-educacion',
  templateUrl: './crear-educacion.component.html',
  styleUrls: ['./crear-educacion.component.css']
})
export class CrearEducacionComponent implements OnInit {

  persona!: Persona;
  form : FormGroup;
  loading : boolean = false;
  
  constructor(
    private educacionService : EducacionService,
    public ref : DynamicDialogRef,
    public config : DynamicDialogConfig,
    private formBuilder : FormBuilder
  ) {
    this.persona = this.config.data.persona;
    this.form = this.formBuilder.group({
      idPersona:[this.persona.id, [Validators.required, Validators.min(1)]],
      institucion:['', [Validators.required, Validators.minLength(2)]],
      titulo: ['', [Validators.required, Validators.minLength(4)]],
      urlImagen: ['', [Validators.required, Validators.minLength(4)]],
      fechaDesde: ['', [Validators.required]],
      fechaHasta: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  crearEducacion(): void {
    const educacion : EducacionDto = {...this.form.value};
    //Swal.showLoading();
    this.loading = true;
    this.educacionService.crearEducacion(educacion).subscribe(
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
          target:'#bodyEducacion',
        })
      }
    )
    
  }

}
