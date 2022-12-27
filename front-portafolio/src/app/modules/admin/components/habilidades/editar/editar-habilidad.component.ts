import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HabilidadDto } from 'src/app/core/dtos/habilidad-dto';
import { Habilidad } from 'src/app/core/models/habilidad';
import { Persona } from 'src/app/core/models/persona';
import { HabilidadService } from 'src/app/services/habilidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {

  habilidad!: Habilidad;
  persona! : Persona;
  form : FormGroup;
  loading : boolean = false;

  constructor(
    private habilidadService: HabilidadService,
    public ref : DynamicDialogRef,
    public config : DynamicDialogConfig,
    private formBuilder : FormBuilder
  ) {
    this.persona = this.config.data.persona;
    this.habilidad = this.config.data.habilidad;
    this.form = this.formBuilder.group({
      idPersona:[this.persona.id, [Validators.required, Validators.min(1)]],
      descripcion:[this.habilidad.descripcion, [Validators.required, Validators.minLength(2)]],
      urlImagen: [this.habilidad.urlImagen, [Validators.required, Validators.minLength(4)]],
      porcentaje: [this.habilidad.porcentaje, [Validators.required, Validators.min(1), Validators.max(100)]]
    })    
  }

  ngOnInit(): void {
  }

  editarHabilidad(): void{
    const habilidad : HabilidadDto = {...this.form.value};
    //Swal.showLoading();
    this.loading = true;
    this.habilidadService.editarHabilidad(this.habilidad.id, habilidad).subscribe(
      data =>{
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
          target:'#bodyHabilidad',
        })
      }
    )
  }

}
