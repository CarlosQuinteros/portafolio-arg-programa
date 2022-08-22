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
    this.personaService.detallePersonaPorDni(this.DNI).subscribe(
      data => {
        this.persona = data;
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

  jumpToSection(section: string): void {
    if(!this.isInViewport(section)){
      document.getElementById(section!)?.scrollIntoView({behavior:'smooth'});
    }
  }

  obtenerFragment(){
    this.suscription = this.fragmentService.getFragment().subscribe(
      data => {
        this.fragment = data
        if(this.fragment!=''){
          document.querySelector(`#${this.fragment}`)?. scrollIntoView();
        } 
      }
    )    
  }
  
  isInViewport(elem:string) {
    var distance : any = document.getElementById(elem)?.getBoundingClientRect();
    return (
        distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
    );
  }

  ngOnDestroy(): void {
      this.suscription.unsubscribe();
  }

  

}
