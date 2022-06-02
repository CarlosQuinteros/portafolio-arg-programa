import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { PortadaComponent } from './components/portada/portada.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from './components/about/about.component';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [
    HomePageComponent,
    PortadaComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ButtonModule,
    RippleModule
  ]
})
export class HomeModule { }
