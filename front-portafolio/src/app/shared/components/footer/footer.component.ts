import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FragmentService } from 'src/app/services/fragment.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anioActual: number = new Date().getFullYear();

  constructor(
    private fragmentService: FragmentService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  setFragment(fragment: string){
    this.fragmentService.setFragment(fragment);
  }

  goToHomePage(): void {
    this.router.navigate(['home'],{fragment:'portada',preserveFragment:false});
  }

  goToAboutSection(): void {
    this.router.navigate(['home'],{fragment:'about'});
  }

}
