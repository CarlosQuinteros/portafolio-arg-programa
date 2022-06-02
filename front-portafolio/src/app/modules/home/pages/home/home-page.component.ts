import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
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

  obtenerFragment(){
    this.suscription = this.fragmentService.getFragment().subscribe(
      data => {
        this.fragment = data
        if(this.fragment!=''){
          document.querySelector(`#${this.fragment}`)?.scrollIntoView();
        } 
      }
    )    
  }

  ngOnDestroy(): void {
      this.suscription.unsubscribe();
  }

  

}
