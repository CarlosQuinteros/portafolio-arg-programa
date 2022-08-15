import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaDto } from 'src/app/core/dtos/persona-dto';
import { Persona } from 'src/app/core/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-datos',
  templateUrl: './editar-datos.component.html',
  styleUrls: ['./editar-datos.component.css']
})
export class EditarDatosComponent implements OnInit {

  @Input() persona!: Persona;

  date2: string | null = null;
  form: FormGroup;

  constructor(
    private personaService: PersonaService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      documento: ['', [Validators.required, Validators.minLength(8)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', [Validators.required]],
      acercaDe: ['', [Validators.required, Validators.minLength(8)]],
      urlImagen: ['', [Validators.required, Validators.minLength(8)]],
      urlCurriculum: ['', [Validators.required, Validators.minLength(8)]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      calle: ['', [Validators.required, Validators.minLength(4)]],
      numero: [null,[Validators.required,  Validators.min(1)]],
      localidad: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    this.cargarFormulario();
    
  }

  cargarFormulario(): void {
    this.form.setValue({
      'nombre': this.persona.nombres,
      'apellido': this.persona.apellido,
      'documento': this.persona.documento,
      'correo': this.persona.correo,
      'fechaNacimiento': this.persona.fechaNacimiento,
      'acercaDe': this.persona.acercaDe,
      'urlImagen': this.persona.urlImagen,
      'urlCurriculum': this.persona.urlCurriculum,
      'telefono': this.persona.telefono,
      'calle': this.persona.domicilio.calle,
      'numero': this.persona.domicilio.numero,
      'localidad': this.persona.domicilio.localidad
    })
  }

  get Nombre(){
    return this.form.get('nombre');
  }

  get Apellido(){
    return this.form.get('apellido');
  }

  get Documento(){
    return this.form.get('documento');
  }

  get Correo(){
    return this.form.get('correo');
  }

  get FechaNacimiento(){
    return this.form.get('fechaNacimiento');
  }

  get AcercaDe(){
    return this.form.get('acercaDe');
  }

  get UrlImagen(){
    return this.form.get('urlImagen');
  }

  get UrlCurriculum(){
    return this.form.get('urlCurriculum');
  }

  get Telefono(){
    return this.form.get('telefono');
  }

  get Calle(){
    return this.form.get('calle');
  }

  get Numero(){
    return this.form.get('numero');
  }

  get Localidad(){
    return this.form.get('localidad');
  }

  editarDatos(): void {
    const personaDto : PersonaDto = {...this.form.value};
    //console.log(personaDto);
    this.personaService.editarPersona(this.persona.id, personaDto).subscribe(
      data => {
        this.obtenerPersona();
        Swal.fire(data.message, '', 'success');
      },
      err => {
        Swal.fire('Error','No se actualizaron los datos', 'error');
      }
    )
    
  }

  obtenerPersona(): void {
    this.personaService.detallePersona(this.persona.id).subscribe(
      data => {
        this.persona = data;
        this.cargarFormulario();
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

}
