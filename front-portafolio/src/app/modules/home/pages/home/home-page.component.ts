import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FragmentService } from 'src/app/services/fragment.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy{

  private fragment: string  = '';
  private suscription : Subscription = new Subscription();
  constructor(
    private activatedRoute : ActivatedRoute,
    private fragmentService : FragmentService
  ) { }  

  ngOnInit(): void {
    //this.obtenerFragment();
    
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
