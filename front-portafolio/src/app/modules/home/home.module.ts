import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { PortadaComponent } from './components/portada/portada.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from './components/about/about.component';
import { RippleModule } from 'primeng/ripple';
import {ScrollTopModule} from 'primeng/scrolltop';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { EducacionesComponent } from './components/educaciones/educaciones.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ImagenesProyectoComponent } from './pages/proyectos/imagenes/imagenes-proyecto.component';
import {GalleriaModule} from 'primeng/galleria';
import {ImageModule} from 'primeng/image';


@NgModule({
  declarations: [
    HomePageComponent,
    PortadaComponent,
    AboutComponent,
    HabilidadesComponent,
    EducacionesComponent,
    ExperienciasComponent,
    ProyectosComponent,
    ImagenesProyectoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ButtonModule,
    RippleModule,
    ScrollTopModule,
    CardModule,
    CarouselModule,
    AvatarGroupModule,
    AvatarModule,
    TooltipModule,
    GalleriaModule,
    ImageModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "maxPercent": 100,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#d1d1d1",
      "innerStrokeWidth": 10,
      "imageHeight": 50,
      "imageWidth": 50,
      "animationDuration": 300,
      "showUnits": true,
      "showImage": true,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true,
      "showTitle": true,
      "showSubtitle" : true,
      "subtitle": 'Percent',
      "subtitleFontSize": '20'
    })
  ]
})
export class HomeModule { }
