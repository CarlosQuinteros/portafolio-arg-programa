import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/core/models/persona';
import { FragmentService } from 'src/app/services/fragment.service';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy{

  persona! : Persona;
  private fragment: string  = '';
  private suscription : Subscription = new Subscription();
  private DNI: string = '38223076';

  constructor(
    private activatedRoute : ActivatedRoute,
    private fragmentService : FragmentService,
    private personaService : PersonaService
  ) { }  

  ngOnInit(): void {
    this.obtenerPersona();
  }

  obtenerPersona(): void {
    Swal.showLoading()
    this.personaService.detallePersonaPorDni(this.DNI).subscribe(
      data => {
        Swal.close();
        this.persona = data;
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

  ngOnDestroy(): void {
      this.suscription.unsubscribe();
  }

  

}
