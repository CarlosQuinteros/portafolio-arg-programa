import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProyectoDto } from 'src/app/core/dtos/proyecto-dto';
import { Persona } from 'src/app/core/models/persona';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {
  
  persona!: Persona;
  form : FormGroup;
  loading : boolean = false;

  constructor(
    private proyectoService: ProyectoService,
    public ref : DynamicDialogRef,
    public config : DynamicDialogConfig,
    private formBuilder : FormBuilder
  ) {
    this.persona = this.config.data.persona;
    this.form = this.formBuilder.group({
      idPersona:[this.persona.id, [Validators.required, Validators.min(1)]],
      descripcion:['', [Validators.required, Validators.minLength(4)]],
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      urlRepositorio: ['', [Validators.required, Validators.minLength(4)]]
    })
   }

   ngOnInit(): void {
       
   }

   crearProyecto(): void {
    const proyecto : ProyectoDto = {...this.form.value};
    //Swal.showLoading();
    this.loading = true;
    this.proyectoService.crearProyecto(proyecto).subscribe(
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
          target:'#bodyProyecto',
        })
      }
    )
   }
}
