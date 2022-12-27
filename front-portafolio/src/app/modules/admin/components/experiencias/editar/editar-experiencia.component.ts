import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ExperienciaDto } from 'src/app/core/dtos/experiencia-dto';
import { ExperienciaLaboral } from 'src/app/core/models/experiencia-laboral';
import { Persona } from 'src/app/core/models/persona';
import { ExperienciaLaboralService } from 'src/app/services/experiencia-laboral.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  experiencia! : ExperienciaLaboral;
  persona! : Persona;
  form : FormGroup;
  tipoJornadas : string[] = ['PARCIAL', 'TOTAL'];
  loading : boolean = false;
  
  constructor(
    private experienciasService : ExperienciaLaboralService,
    public ref : DynamicDialogRef,
    public config : DynamicDialogConfig,
    private formBuilder : FormBuilder
  ) { 
    this.persona = this.config.data.persona;
    this.experiencia = this.config.data.experiencia;
    console.log(this.experiencia);
    
    this.form = this.formBuilder.group({
      idPersona:[this.persona.id, [Validators.required, Validators.min(1)]],
      organizacion: [this.experiencia.organizacion, [Validators.required, Validators.minLength(4)]],
      urlImagen:    [this.experiencia.urlImagen, [Validators.required, Validators.minLength(4)]],
      puesto:       [this.experiencia.puesto, [Validators.required, Validators.minLength(4)]],
      tareas:       [this.experiencia.tareas, [Validators.required, Validators.minLength(4)]],
      tipoJornada:  [this.experiencia.tipoJornada, [Validators.required, Validators.minLength(2)]],
      fechaDesde:   [this.experiencia.fechaDesde, [Validators.required]],
      fechaHasta:   [this.experiencia.fechaHasta]
    })    
  }
  
  ngOnInit(): void {
  }

  editarExperiencia(): void {
    const experiencia : ExperienciaDto = {...this.form.value};
    //Swal.showLoading();
    this.loading = true;
    this.experienciasService.editarExperienciaLaboral(this.experiencia.id, experiencia).subscribe(
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
          target:'#bodyExperiencia',
        })
      }
    )
  }

}
