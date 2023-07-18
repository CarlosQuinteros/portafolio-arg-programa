import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailDto } from 'src/app/core/dtos/email-dto';
import { Persona } from 'src/app/core/models/persona';
import { ContactoService } from 'src/app/services/contacto.service';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  nombreCompleto : string = '';
  correo : string = '';
  msj : string = '';
  dni : string = '38223076';
  persona! : Persona;

  constructor(
    private personaService : PersonaService,
    private contactoService: ContactoService
  ) { }

  ngOnInit(): void {
    this.obtenerPersona();
  }

  obtenerPersona(): void {
    this.personaService.detallePersonaPorDni(this.dni).subscribe(
      data => {
        this.persona = data;
      }
    )
  }


  enviarEmail(form : NgForm): void {
    Swal.showLoading();
    const emailDto = this.formatearMensajeContacto();
    this.contactoService.enviarMensajeContacto(emailDto).subscribe(
      data => {
        form.resetForm();
        Swal.fire(data.message, '', 'success');
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

  formatearMensajeContacto(): EmailDto {
    let emailDto : EmailDto = new EmailDto(this.persona.correo,'Contacto portafolio', '');
    const mensaje : string = `Nombre completo: ${this.nombreCompleto}\nCorreo: ${this.correo}\n\n${this.msj}`;
    emailDto.content = mensaje;
    return emailDto;
  }

}
