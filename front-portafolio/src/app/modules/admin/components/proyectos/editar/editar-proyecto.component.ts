import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProyectoDto } from 'src/app/core/dtos/proyecto-dto';
import { Persona } from 'src/app/core/models/persona';
import { Proyecto } from 'src/app/core/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  
  persona!: Persona;
  proyecto!: Proyecto;
  form : FormGroup;
  loading : boolean = false;

  constructor(
    private proyectoService: ProyectoService,
    public ref : DynamicDialogRef,
    public config : DynamicDialogConfig,
    private formBuilder : FormBuilder
  ) {
    this.persona = this.config.data.persona;
    this.proyecto = this.config.data.proyecto;
    this.form = this.formBuilder.group({
      idPersona:[this.persona.id, [Validators.required, Validators.min(1)]],
      descripcion:[this.proyecto.descripcion, [Validators.required, Validators.minLength(4)]],
      nombre: [this.proyecto.nombre, [Validators.required, Validators.minLength(4)]],
      urlRepositorio: [this.proyecto.urlRepositorio, [Validators.required, Validators.minLength(4)]]
    })
   }

   ngOnInit(): void {
       
   }

   editarProyecto(): void {
    const proyecto : ProyectoDto = {...this.form.value};
    //Swal.showLoading();
    this.loading = true;
    this.proyectoService.editarProyecto(this.proyecto.id, proyecto).subscribe(
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
