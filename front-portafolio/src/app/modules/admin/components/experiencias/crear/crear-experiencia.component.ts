import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ExperienciaDto } from 'src/app/core/dtos/experiencia-dto';
import { Persona } from 'src/app/core/models/persona';
import { ExperienciaLaboralService } from 'src/app/services/experiencia-laboral.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-experiencia',
  templateUrl: './crear-experiencia.component.html',
  styleUrls: ['./crear-experiencia.component.css']
})
export class CrearExperienciaComponent implements OnInit {

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
    this.form = this.formBuilder.group({
      idPersona:[this.persona.id, [Validators.required, Validators.min(1)]],
      organizacion:['', [Validators.required, Validators.minLength(4)]],
      urlImagen: ['', [Validators.required, Validators.minLength(4)]],
      puesto: ['', [Validators.required, Validators.minLength(4)]],
      tareas: ['', [Validators.required, Validators.minLength(4)]],
      tipoJornada: [this.tipoJornadas[0], [Validators.required, Validators.minLength(2)]],
      fechaDesde: ['', [Validators.required]],
      fechaHasta: [null]
    })    
  }

  ngOnInit(): void {
  }

  crearExperiencia(): void {
    const experiencia : ExperienciaDto = {...this.form.value};
    //Swal.showLoading();
    this.loading = true;
    this.experienciasService.crearExperienciaLaboral(experiencia).subscribe(
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
