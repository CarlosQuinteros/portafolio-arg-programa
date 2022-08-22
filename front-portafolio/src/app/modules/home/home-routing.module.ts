import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PortadaComponent } from './components/portada/portada.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { ImagenesProyectoComponent } from './pages/proyectos/imagenes/imagenes-proyecto.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '', component: HomePageComponent
      },
      {
        path: 'proyectos/:id/imagenes',
        component: ImagenesProyectoComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
