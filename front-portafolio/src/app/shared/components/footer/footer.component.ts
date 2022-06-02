import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FragmentService } from 'src/app/services/fragment.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private fragmentService: FragmentService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  setFragment(fragment: string){
    this.fragmentService.setFragment(fragment);
  }

  goToHomePage(): void {
    this.router.navigate(['home']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  goToAboutSection(): void {
    this.router.navigate(['home']).then(() => {
      document.getElementById('about')?.scrollIntoView(true);
      // document.querySelector('#about')?.scrollIntoView({behavior: 'smooth', block:'start', inline:'nearest'});
    })
  }

}
